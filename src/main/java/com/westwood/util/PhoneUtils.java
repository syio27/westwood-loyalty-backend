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
     * Normalizes a phone number for storage or search.
     * Removes all whitespace, dashes, parentheses, and other non-digit characters except +.
     * Convert 8 to +7, 7 to +7
     *
     * @param phone the phone number to normalize
     * @return normalized phone number (digits only, with optional leading +)
     */
    public static String normalize(String phone) {
        if (phone == null || phone.isBlank()) return phone;

        StringBuilder out = new StringBuilder(16);
        boolean hasPlus = false;

        for (int i = 0; i < phone.length(); i++) {
            char c = phone.charAt(i);

            if (c == '+' && !hasPlus && out.isEmpty()) {
                out.append('+');
                hasPlus = true;
            }
            else if (c >= '0' && c <= '9') {
                out.append(c);
            }
        }

        // Convert 8XXXXXXXXXX → +7XXXXXXXXXX
        if (!out.isEmpty() && out.charAt(0) == '8') {
            out.replace(0, 1, "+7");
        }
        else if (!out.isEmpty() && out.charAt(0) != '+') {
            out.insert(0, '+');
        }

        return out.toString();
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
