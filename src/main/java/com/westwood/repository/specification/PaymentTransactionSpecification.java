package com.westwood.repository.specification;

import com.westwood.common.dto.PaymentSearchRequest;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class PaymentTransactionSpecification {

    public static Specification<PaymentTransaction> buildSpecification(PaymentSearchRequest request) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Exclude internal REFUND status transactions
            predicates.add(cb.notEqual(root.get("status"), PaymentTransaction.PaymentStatus.REFUND));

            // Payment ID filter (txId)
            if (request.getPaymentId() != null && !request.getPaymentId().trim().isEmpty()) {
                String paymentIdPattern = "%" + request.getPaymentId() + "%";
                predicates.add(cb.like(root.get("txId"), paymentIdPattern));
            }

            // Client name filter (search in both name and surname)
            if (request.getClientName() != null && !request.getClientName().trim().isEmpty()) {

                Join<PaymentTransaction, Client> clientJoin = root.join("client");

                String[] parts = request.getClientName()
                        .toLowerCase()
                        .trim()
                        .split("\\s+");

                List<Predicate> namePredicates = new ArrayList<>();

                for (String part : parts) {
                    String pattern = "%" + part + "%";

                    namePredicates.add(
                            cb.or(
                                    cb.like(cb.lower(clientJoin.get("name")), pattern),
                                    cb.like(cb.lower(clientJoin.get("surname")), pattern)
                            )
                    );
                }

                // Every token must match either name OR surname
                predicates.add(cb.and(namePredicates.toArray(new Predicate[0])));
            }

            // Phone filter
            if (request.getPhone() != null && !request.getPhone().trim().isEmpty()) {
                Join<PaymentTransaction, Client> clientJoin = root.join("client");
                String phonePattern = "%" + request.getPhone() + "%";
                predicates.add(cb.like(clientJoin.get("phone"), phonePattern));
            }

            // Period filter (from)
            if (request.getPeriodFrom() != null) {
                LocalDateTime fromDateTime = LocalDateTime.of(request.getPeriodFrom(), java.time.LocalTime.MIN);
                predicates.add(cb.greaterThanOrEqualTo(root.get("createdAt"), fromDateTime));
            }

            // Period filter (to)
            if (request.getPeriodTo() != null) {
                LocalDateTime toDateTime = LocalDateTime.of(request.getPeriodTo(), java.time.LocalTime.MAX);
                predicates.add(cb.lessThanOrEqualTo(root.get("createdAt"), toDateTime));
            }

            // Payment type filter
            if (request.getPaymentType() != null && !request.getPaymentType().trim().isEmpty() && !request.getPaymentType().equals("ALL")) {
                if (request.getPaymentType().equals("PAID")) {
                    predicates.add(cb.equal(root.get("status"), PaymentTransaction.PaymentStatus.COMPLETED));
                } else if (request.getPaymentType().equals("REFUND")) {
                    predicates.add(cb.equal(root.get("status"), PaymentTransaction.PaymentStatus.REFUNDED));
                }
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
