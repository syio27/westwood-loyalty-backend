package com.westwood.repository.specification;

import com.westwood.common.dto.ClientSearchRequest;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class ClientSpecification {

    public static Specification<Client> buildSpecification(ClientSearchRequest request) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Name filter (search in both name and surname, or fullName)
            if (request.getName() != null && !request.getName().trim().isEmpty()) {
                String[] parts = request.getName().toLowerCase().trim().split("\\s+");
                List<Predicate> tokenPredicates = new ArrayList<>();
                for (String part : parts) {
                    String pattern = "%" + part + "%";

                    tokenPredicates.add(
                            cb.or(
                                    cb.like(cb.lower(root.get("name")), pattern),
                                    cb.like(cb.lower(root.get("surname")), pattern)
                            )
                    );
                }
                // Every token must match either name OR surname
                predicates.add(cb.and(tokenPredicates.toArray(new Predicate[0])));
            }

            // Phone filter
            if (request.getPhone() != null && !request.getPhone().trim().isEmpty()) {
                String phonePattern = "%" + request.getPhone() + "%";
                predicates.add(cb.like(root.get("phone"), phonePattern));
            }

            // Email filter
            if (request.getEmail() != null && !request.getEmail().trim().isEmpty()) {
                String emailPattern = "%" + request.getEmail().toLowerCase() + "%";
                predicates.add(cb.like(cb.lower(root.get("email")), emailPattern));
            }

            // Client type filter
            if (request.getClientType() != null) {
                predicates.add(cb.equal(root.get("clientType"), request.getClientType()));
            }

            // Tags filter
            if (request.getTags() != null && !request.getTags().isEmpty()) {
                Join<Client, com.westwood.domain.Tag> tagJoin = root.join("tags");
                predicates.add(tagJoin.get("name").in(request.getTags()));
                // Ensure distinct results when joining with tags
                query.distinct(true);
            }

            // Last visit filter (from) - client must have at least one completed payment >= fromDateTime
            if (request.getLastVisitFrom() != null) {
                LocalDateTime fromDateTime = LocalDateTime.of(request.getLastVisitFrom(), java.time.LocalTime.MIN);
                Subquery<Long> existsSubquery = query.subquery(Long.class);
                Root<PaymentTransaction> paymentRoot = existsSubquery.from(PaymentTransaction.class);
                existsSubquery.select(cb.literal(1L))
                    .where(cb.and(
                        cb.equal(paymentRoot.get("client"), root),
                        cb.equal(paymentRoot.get("status"), PaymentTransaction.PaymentStatus.COMPLETED),
                        cb.greaterThanOrEqualTo(paymentRoot.get("createdAt"), fromDateTime)
                    ));
                predicates.add(cb.exists(existsSubquery));
            }

            // Last visit filter (to) - client must have at least one completed payment <= toDateTime
            if (request.getLastVisitTo() != null) {
                LocalDateTime toDateTime = LocalDateTime.of(request.getLastVisitTo(), java.time.LocalTime.MAX);
                Subquery<Long> existsSubquery = query.subquery(Long.class);
                Root<PaymentTransaction> paymentRoot = existsSubquery.from(PaymentTransaction.class);
                existsSubquery.select(cb.literal(1L))
                    .where(cb.and(
                        cb.equal(paymentRoot.get("client"), root),
                        cb.equal(paymentRoot.get("status"), PaymentTransaction.PaymentStatus.COMPLETED),
                        cb.lessThanOrEqualTo(paymentRoot.get("createdAt"), toDateTime)
                    ));
                predicates.add(cb.exists(existsSubquery));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
