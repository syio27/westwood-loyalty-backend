package com.westwood.common.exception;

public class InvalidProgramStateException extends RuntimeException {

    public InvalidProgramStateException(String message) {
        super(message);
    }

    public InvalidProgramStateException(String message, Throwable cause) {
        super(message, cause);
    }
}
