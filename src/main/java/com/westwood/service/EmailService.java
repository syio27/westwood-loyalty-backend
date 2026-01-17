package com.westwood.service;

public interface EmailService {
    void sendInvitationEmail(String to, String firstName, String activationToken, String activationUrl);
    void sendActivationConfirmationEmail(String to, String firstName);
    void sendPasswordResetEmail(String to, String firstName, String resetToken, String resetUrl);
}

