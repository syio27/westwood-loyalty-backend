package com.westwood.service;

import com.westwood.repository.PaymentTransactionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.Year;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * Service for generating unique transaction identifiers in format PTX-YY-XXXXX
 * where YY is the last 2 digits of the year and XXXXX is a random 5-character uppercase letter sequence (A-Z)
 * This provides 26^5 = 11,881,376 possible combinations per year
 */
@Service
public class TransactionIdentifierService {

    private static final int RANDOM_SEQUENCE_LENGTH = 5;
    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int MAX_GENERATION_ATTEMPTS = 100;

    private final PaymentTransactionRepository paymentRepository;
    private final SecureRandom secureRandom;
    private final Lock lock = new ReentrantLock();

    public TransactionIdentifierService(PaymentTransactionRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
        this.secureRandom = new SecureRandom();
    }

    /**
     * Generates a random uppercase letter sequence of specified length.
     * 
     * @param length Length of the sequence
     * @return Random uppercase letter sequence
     */
    private String generateRandomSequence(int length) {
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            int index = secureRandom.nextInt(LETTERS.length());
            sb.append(LETTERS.charAt(index));
        }
        return sb.toString();
    }

    /**
     * Generates a unique transaction identifier for the current year.
     * Format: PTX-YY-XXXXX (e.g., PTX-24-ABCDE)
     * where XXXXX is a random 5-character uppercase letter sequence
     * 
     * @return Transaction identifier string
     */
    @Transactional
    public String generateNextTransactionIdentifier() {
        lock.lock();
        try {
            int currentYear = Year.now().getValue();
            int yearSuffix = currentYear % 100; // Last 2 digits (e.g., 24 for 2024)

            // Generate unique identifier by checking for collisions
            String identifier;
            int attempts = 0;
            do {
                String randomSequence = generateRandomSequence(RANDOM_SEQUENCE_LENGTH);
                identifier = String.format("PTX-%02d-%s", yearSuffix, randomSequence);
                attempts++;

                if (attempts > MAX_GENERATION_ATTEMPTS) {
                    throw new IllegalStateException(
                        String.format("Failed to generate unique transaction identifier after %d attempts for year %d", 
                            MAX_GENERATION_ATTEMPTS, yearSuffix)
                    );
                }
            } while (paymentRepository.existsByTxId(identifier));

            return identifier;
        } finally {
            lock.unlock();
        }
    }

    /**
     * Parses transaction identifier to extract year suffix.
     * 
     * @param identifier Transaction identifier (e.g., PTX-24-ABCDE)
     * @return Year suffix (e.g., 24)
     */
    public int parseTransactionIdentifier(String identifier) {
        if (identifier == null || !identifier.matches("PTX-\\d{2}-[A-Z]{5}")) {
            throw new IllegalArgumentException("Invalid transaction identifier format: " + identifier + 
                ". Expected format: PTX-YY-XXXXX where YY is 2 digits and XXXXX is 5 uppercase letters");
        }

        String[] parts = identifier.split("-");
        return Integer.parseInt(parts[1]);
    }
}

