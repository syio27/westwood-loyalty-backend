package com.westwood.service.impl;

import com.westwood.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${app.frontend.url:}")
    private String frontendUrl;
    
    @Value("${app.base-url:https://ww-reward-backend-401aa2c307ef.herokuapp.com}")
    private String baseUrl;

    @Value("${app.mail.from-name:Westwood Team}")
    private String fromName;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendInvitationEmail(String to, String firstName, String activationToken, String activationUrl) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail, fromName);
            helper.setTo(to);
            helper.setSubject("Welcome to Westwood - Activate Your Account");

            String appUrl = (frontendUrl != null && !frontendUrl.isEmpty()) ? frontendUrl : baseUrl;
            String activationLink = activationUrl != null ? activationUrl : 
                String.format("%s/auth/activation?token=%s", appUrl, activationToken);

            String htmlContent = buildInvitationEmailContent(firstName, activationLink, activationToken);
            helper.setText(htmlContent, true);

            mailSender.send(message);
            logger.info("Invitation email sent successfully to: {}", to);
        } catch (MessagingException e) {
            logger.error("Failed to send invitation email to: {}", to, e);
            throw new RuntimeException("Failed to send invitation email", e);
        } catch (Exception e) {
            logger.error("Unexpected error while sending invitation email to: {}", to, e);
            throw new RuntimeException("Failed to send invitation email", e);
        }
    }

    @Override
    public void sendActivationConfirmationEmail(String to, String firstName) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail, fromName);
            helper.setTo(to);
            helper.setSubject("Account Activated - Welcome to Westwood");

            String htmlContent = buildActivationConfirmationEmailContent(firstName);
            helper.setText(htmlContent, true);

            mailSender.send(message);
            logger.info("Activation confirmation email sent successfully to: {}", to);
        } catch (MessagingException e) {
            logger.error("Failed to send activation confirmation email to: {}", to, e);
            throw new RuntimeException("Failed to send activation confirmation email", e);
        } catch (Exception e) {
            logger.error("Unexpected error while sending activation confirmation email to: {}", to, e);
            throw new RuntimeException("Failed to send activation confirmation email", e);
        }
    }

    @Override
    public void sendPasswordResetEmail(String to, String firstName, String resetToken, String resetUrl) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail, fromName);
            helper.setTo(to);
            helper.setSubject("Reset Your Westwood Password");

            String appUrl = (frontendUrl != null && !frontendUrl.isEmpty()) ? frontendUrl : baseUrl;
            String resetLink = resetUrl != null ? resetUrl :
                    String.format("%s/auth/reset-password?token=%s", appUrl, resetToken);

            String htmlContent = buildPasswordResetEmailContent(firstName, resetLink, resetToken);
            helper.setText(htmlContent, true);

            mailSender.send(message);
            logger.info("Password reset email sent successfully to: {}", to);
        } catch (MessagingException e) {
            logger.error("Failed to send password reset email to: {}", to, e);
            throw new RuntimeException("Failed to send password reset email", e);
        } catch (Exception e) {
            logger.error("Unexpected error while sending password reset email to: {}", to, e);
            throw new RuntimeException("Failed to send password reset email", e);
        }
    }

    private String buildInvitationEmailContent(String firstName, String activationLink, String activationToken) {
        return String.format("""
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; background-color: #f9f9f9; }
                    .button { display: inline-block; padding: 12px 24px; background-color: #4CAF50; 
                               color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
                    .token-box { background-color: #e8f5e9; padding: 15px; border-radius: 5px; 
                                 margin: 20px 0; font-family: monospace; word-break: break-all; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Welcome to Westwood!</h1>
                    </div>
                    <div class="content">
                        <p>Hello %s,</p>
                        <p>You have been invited to join Westwood as a Manager. To get started, please activate your account by clicking the button below:</p>
                        <div style="text-align: center;">
                            <a href="%s" class="button">Activate Account</a>
                        </div>
                        <p>Or copy and paste this link into your browser:</p>
                        <div class="token-box">%s</div>
                        <p><strong>Important:</strong> This activation link will expire in 7 days. If you didn't request this invitation, please ignore this email.</p>
                    </div>
                    <div class="footer">
                        <p>© 2026 Westwood. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
            """, firstName, activationLink, activationLink);
    }

    private String buildActivationConfirmationEmailContent(String firstName) {
        return String.format("""
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; background-color: #f9f9f9; }
                    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Account Activated Successfully!</h1>
                    </div>
                    <div class="content">
                        <p>Hello %s,</p>
                        <p>Your account has been successfully activated. You can now log in to Westwood and start using the platform.</p>
                        <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
                    </div>
                    <div class="footer">
                        <p>© 2026 Westwood. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
            """, firstName);
    }

    private String buildPasswordResetEmailContent(String firstName, String resetLink, String resetToken) {
        return String.format("""
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #2196F3; color: white; padding: 20px; text-align: center; }
                    .content { padding: 20px; background-color: #f9f9f9; }
                    .button { display: inline-block; padding: 12px 24px; background-color: #2196F3;
                               color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
                    .token-box { background-color: #e3f2fd; padding: 15px; border-radius: 5px;
                                 margin: 20px 0; font-family: monospace; word-break: break-all; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Password Reset Request</h1>
                    </div>
                    <div class="content">
                        <p>Hello %s,</p>
                        <p>We received a request to reset your password for your Westwood account. Click the button below to reset your password:</p>
                        <div style="text-align: center;">
                            <a href="%s" class="button">Reset Password</a>
                        </div>
                        <p>Or copy and paste this link into your browser:</p>
                        <div class="token-box">%s</div>
                        <p><strong>Important:</strong> This password reset link will expire in 24 hours. If you didn't request a password reset, please ignore this email and your password will remain unchanged.</p>
                    </div>
                    <div class="footer">
                        <p>© 2026 Westwood. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
            """, firstName, resetLink, resetLink);
    }
}

