package com.westwood.common.exception;

public class InvalidActivationTokenException extends RuntimeException {

    public InvalidActivationTokenException(String message) {
        super(message);
    }

    public InvalidActivationTokenException(String message, Throwable cause) {
        super(message, cause);
    }
}

