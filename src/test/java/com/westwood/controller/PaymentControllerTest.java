package com.westwood.controller;

import com.westwood.common.dto.CreatePaymentRequest;
import com.westwood.common.dto.PaymentTransactionDto;
import com.westwood.service.PaymentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PaymentController.class)
class PaymentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PaymentService paymentService;

    @Test
    @WithMockUser(roles = "MANAGER")
    void testCreatePayment() throws Exception {
        UUID clientUuid = UUID.randomUUID();
        CreatePaymentRequest request = new CreatePaymentRequest();
        request.setClientId(clientUuid);
        request.setAmount(new BigDecimal("100000"));

        PaymentTransactionDto dto = new PaymentTransactionDto();
        when(paymentService.createPayment(any(), any())).thenReturn(dto);

        mockMvc.perform(post("/api/v1/payments")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"clientId\":\"" + clientUuid + "\",\"amount\":100000}"))
                .andExpect(status().isCreated());
    }
}

