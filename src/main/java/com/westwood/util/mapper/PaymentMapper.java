package com.westwood.util.mapper;

import com.westwood.common.dto.PaymentTransactionDto;
import com.westwood.domain.PaymentTransaction;
import org.springframework.stereotype.Component;

@Component
public class PaymentMapper {

    public PaymentTransactionDto toDto(PaymentTransaction payment) {
        if (payment == null) {
            return null;
        }

        PaymentTransactionDto dto = new PaymentTransactionDto();
        dto.setTxId(payment.getTxId());
        dto.setClientId(payment.getClient() != null ? payment.getClient().getUuid() : null); // Use UUID for external
        dto.setClientName(payment.getClient() != null ? 
            payment.getClient().getName() + " " + payment.getClient().getSurname() : null);
        dto.setEnteredByUserId(payment.getEnteredBy() != null ? payment.getEnteredBy().getUuid() : null); // Use UUID for external
        dto.setEnteredByUsername(payment.getEnteredBy() != null ? payment.getEnteredBy().getUsername() : null);
        dto.setAmount(payment.getAmount());
        dto.setNotes(payment.getNotes());
        dto.setStatus(payment.getStatus());
        dto.setRefundedPaymentTxId(payment.getRefundedPayment() != null ? payment.getRefundedPayment().getTxId() : null);
        dto.setCreatedAt(payment.getCreatedAt());
        dto.setUpdatedAt(payment.getUpdatedAt());

        return dto;
    }
}

