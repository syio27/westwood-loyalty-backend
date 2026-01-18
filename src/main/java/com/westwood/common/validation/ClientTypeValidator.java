package com.westwood.common.validation;

import com.westwood.common.dto.CreateClientRequest;
import com.westwood.domain.ClientType;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ClientTypeValidator implements ConstraintValidator<ClientTypeValidation, CreateClientRequest> {

    @Override
    public void initialize(ClientTypeValidation constraintAnnotation) {
        // No initialization needed
    }

    @Override
    public boolean isValid(CreateClientRequest request, ConstraintValidatorContext context) {
        if (request == null || request.getClientType() == null) {
            return true; // Let @NotNull handle null validation
        }

        context.disableDefaultConstraintViolation();
        boolean isValid = true;

        if (request.getClientType() == ClientType.BUSINESS) {
            // For BUSINESS: only name is required, surname should not be provided
            if (request.getName() == null || request.getName().trim().isEmpty()) {
                context.buildConstraintViolationWithTemplate("Name is required for business clients")
                        .addPropertyNode("name")
                        .addConstraintViolation();
                isValid = false;
            } else if (request.getName().trim().length() < 2) {
                context.buildConstraintViolationWithTemplate("Name must be at least 2 characters for business clients")
                        .addPropertyNode("name")
                        .addConstraintViolation();
                isValid = false;
            }
            // Surname should not be provided for business clients
            if (request.getSurname() != null && !request.getSurname().trim().isEmpty()) {
                context.buildConstraintViolationWithTemplate("Surname should not be provided for business clients")
                        .addPropertyNode("surname")
                        .addConstraintViolation();
                isValid = false;
            }
        } else if (request.getClientType() == ClientType.INDIVIDUAL) {
            // For INDIVIDUAL: name is required, surname is optional
            if (request.getName() == null || request.getName().trim().isEmpty()) {
                context.buildConstraintViolationWithTemplate("Name is required for individual clients")
                        .addPropertyNode("name")
                        .addConstraintViolation();
                isValid = false;
            } else if (request.getName().trim().length() < 2) {
                context.buildConstraintViolationWithTemplate("Name must be at least 2 characters for individual clients")
                        .addPropertyNode("name")
                        .addConstraintViolation();
                isValid = false;
            }
            // Surname is optional for individual clients
            // If surname is provided (not null and not empty), it will be validated by @Size annotation
        }

        return isValid;
    }
}
