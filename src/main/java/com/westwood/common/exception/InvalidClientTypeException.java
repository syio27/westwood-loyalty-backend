package com.westwood.common.exception;

public class InvalidClientTypeException extends RuntimeException {

    public InvalidClientTypeException(String message) {
        super(message);
    }

    public InvalidClientTypeException(String message, Throwable cause) {
        super(message, cause);
    }
}

