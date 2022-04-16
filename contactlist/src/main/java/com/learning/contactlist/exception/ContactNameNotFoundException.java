package com.learning.contactlist.exception;

public class ContactNameNotFoundException extends RuntimeException{
    public ContactNameNotFoundException(String message) {
        super(message);
    }
}
