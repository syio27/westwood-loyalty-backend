package com.westwood.util;

/**
 * Utility class for phone number normalization and formatting.
 * 
 * Storage format: No whitespace, only digits and optional leading +
 * Example: +77053811138
 * 
 * Display format: +7 XXX XXX XXXX (Kazakhstan/Russia format)
 * Example: +7 705 381 1138
 */
public final class PhoneUtils {

    private PhoneUtils() {
        // Utility class
    }

    /**
     * Normalizes a phone number for storage.
     * Removes all whitespace, dashes, parentheses, and other non-digit characters except +.
     * 
     * @param phone the phone number to normalize
     * @return normalized phone number (digits only, with optional leading +)
     */
    public static String normalize(String phone) {
        if (phone == null || phone.isBlank()) {
            return phone;
        }
        
        // Keep only digits and +
        StringBuilder normalized = new StringBuilder();
        boolean hasPlus = false;
        
        for (char c : phone.toCharArray()) {
            if (c == '+' && !hasPlus && normalized.length() == 0) {
                normalized.append(c);
                hasPlus = true;
            } else if (Character.isDigit(c)) {
                normalized.append(c);
            }
        }
        
        return normalized.toString();
    }

    /**
     * Formats a phone number for display.
     * Assumes Kazakhstan/Russia format: +7 XXX XXX XXXX
     * 
     * @param phone the normalized phone number
     * @return formatted phone number for display
     */
    public static String format(String phone) {
        if (phone == null || phone.isBlank()) {
            return phone;
        }
        
        // First normalize the phone
        String normalized = normalize(phone);
        
        // Remove leading + for processing
        String digits = normalized.startsWith("+") ? normalized.substring(1) : normalized;
        
        // If the number is too short, just return with + prefix
        if (digits.length() < 10) {
            return normalized.startsWith("+") ? normalized : "+" + normalized;
        }
        
        // Format for Kazakhstan/Russia: +7 XXX XXX XXXX (11 digits total with country code)
        // If starts with 7 or 8 (CIS format)
        if (digits.length() == 11 && (digits.startsWith("7") || digits.startsWith("8"))) {
            // Convert 8 to 7 for standard format
            String countryCode = "7";
            String rest = digits.substring(1);
            return String.format("+%s %s %s %s", 
                countryCode,
                rest.substring(0, 3),
                rest.substring(3, 6),
                rest.substring(6));
        }
        
        // For 10-digit numbers (without country code), assume +7
        if (digits.length() == 10) {
            return String.format("+7 %s %s %s",
                digits.substring(0, 3),
                digits.substring(3, 6),
                digits.substring(6));
        }
        
        // For other formats, just add spaces every 3 digits after country code
        if (digits.length() > 3) {
            StringBuilder formatted = new StringBuilder("+");
            formatted.append(digits.charAt(0)).append(" ");
            
            String remaining = digits.substring(1);
            for (int i = 0; i < remaining.length(); i++) {
                if (i > 0 && i % 3 == 0 && i < remaining.length()) {
                    formatted.append(" ");
                }
                formatted.append(remaining.charAt(i));
            }
            return formatted.toString();
        }
        
        return normalized.startsWith("+") ? normalized : "+" + normalized;
    }
}
