package com.westwood.common.exception;

public class InsufficientBonusException extends RuntimeException {

    public InsufficientBonusException(String message) {
        super(message);
    }

    public InsufficientBonusException(String message, Throwable cause) {
        super(message, cause);
    }
}

