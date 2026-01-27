package com.westwood.util;

import com.westwood.domain.Client;

/**
 * Utility class for client-related operations.
 */
public final class ClientUtils {

    private ClientUtils() {
        // Utility class
    }

    /**
     * Returns the full name of a client, handling null surname gracefully.
     * 
     * @param client the client
     * @return full name (name + surname if surname exists, otherwise just name)
     */
    public static String getFullName(Client client) {
        if (client == null) {
            return null;
        }
        return getFullName(client.getName(), client.getSurname());
    }

    /**
     * Returns the full name from name and surname, handling null surname gracefully.
     * 
     * @param name the first name
     * @param surname the surname (can be null)
     * @return full name (name + surname if surname exists, otherwise just name)
     */
    public static String getFullName(String name, String surname) {
        if (name == null) {
            return null;
        }
        if (surname == null || surname.isBlank()) {
            return name.trim();
        }
        return (name + " " + surname).trim();
    }
}
