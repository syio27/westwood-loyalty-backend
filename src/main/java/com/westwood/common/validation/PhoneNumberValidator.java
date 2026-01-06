package com.westwood.common.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PhoneNumberValidator implements ConstraintValidator<PhoneNumber, String> {

    // Pattern: +7 followed by 10 digits with optional spaces in format: +7 ### ### ####
    // Matches: +71234567890, +7 123 456 7890, +7 1234567890, etc.
    private static final String PHONE_PATTERN = "^\\+7\\s?\\d{3}\\s?\\d{3}\\s?\\d{4}$";

    @Override
    public void initialize(PhoneNumber constraintAnnotation) {
        // No initialization needed
    }

    @Override
    public boolean isValid(String phone, ConstraintValidatorContext context) {
        if (phone == null || phone.isBlank()) {
            return true; // Let @NotBlank handle null/empty validation
        }
        return phone.matches(PHONE_PATTERN);
    }
}

