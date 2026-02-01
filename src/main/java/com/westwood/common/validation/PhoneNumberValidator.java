package com.westwood.common.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PhoneNumberValidator implements ConstraintValidator<PhoneNumber, String> {

    /**
     * Accepts:
     * +7 701 123 45 67
     * 8 (701) 123-45-67
     * 7 701 1234567
     * +77011234567
     * 87011234567
     */
    private static final String KZ_PHONE_REGEX =
            "^(\\+7|7|8)[\\s\\-()]*\\d{3}[\\s\\-()]*\\d{3}[\\s\\-()]*\\d{2}[\\s\\-()]*\\d{2}$";

    @Override
    public boolean isValid(String phone, ConstraintValidatorContext context) {
        if (phone == null || phone.isBlank()) {
            return true; // @NotBlank should handle empty
        }

        return phone.matches(KZ_PHONE_REGEX);
    }
}

