package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.domain.Client;
import com.westwood.domain.User;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.UserRepository;
import com.westwood.util.PhoneUtils;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/backoffice")
public class BackofficeController {

    private final ClientRepository clientRepository;
    private final UserRepository userRepository;

    public BackofficeController(ClientRepository clientRepository, UserRepository userRepository) {
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
    }

    /**
     * Scans and normalizes all phone numbers in clients and users tables.
     * Phone numbers are normalized to remove whitespace and special characters,
     * keeping only digits and optional leading +.
     */
    @PostMapping("/normalize-phones")
    @PreAuthorize("hasRole('SUDO')")
    @Transactional
    public ResponseEntity<PhoneNormalizationResult> normalizePhoneNumbers() {
        PhoneNormalizationResult result = new PhoneNormalizationResult();
        
        // Process clients
        List<Client> clients = clientRepository.findAll();
        for (Client client : clients) {
            String originalPhone = client.getPhone();
            if (originalPhone != null) {
                String normalizedPhone = PhoneUtils.normalize(originalPhone);
                if (!originalPhone.equals(normalizedPhone)) {
                    client.setPhone(normalizedPhone);
                    clientRepository.save(client);
                    result.getClientPhoneChanges().add(new PhoneChange(
                        client.getUuid().toString(),
                        client.getName(),
                        originalPhone,
                        normalizedPhone
                    ));
                }
            }
        }
        result.setClientsProcessed(clients.size());
        result.setClientsUpdated(result.getClientPhoneChanges().size());
        
        // Process users
        List<User> users = userRepository.findAll();
        for (User user : users) {
            String originalPhone = user.getPhone();
            if (originalPhone != null && !originalPhone.isBlank()) {
                String normalizedPhone = PhoneUtils.normalize(originalPhone);
                if (!originalPhone.equals(normalizedPhone)) {
                    user.setPhone(normalizedPhone);
                    userRepository.save(user);
                    result.getUserPhoneChanges().add(new PhoneChange(
                        user.getUuid().toString(),
                        user.getFirstName() + " " + user.getLastName(),
                        originalPhone,
                        normalizedPhone
                    ));
                }
            }
        }
        result.setUsersProcessed(users.size());
        result.setUsersUpdated(result.getUserPhoneChanges().size());
        
        return ResponseEntity.ok(result);
    }

    /**
     * Preview phone number normalization without making changes.
     * Returns what would be changed if normalize-phones is called.
     */
    @GetMapping("/normalize-phones/preview")
    @PreAuthorize("hasRole('SUDO')")
    @Transactional(readOnly = true)
    public ResponseEntity<PhoneNormalizationResult> previewPhoneNormalization() {
        PhoneNormalizationResult result = new PhoneNormalizationResult();
        
        // Process clients (preview only)
        List<Client> clients = clientRepository.findAll();
        for (Client client : clients) {
            String originalPhone = client.getPhone();
            if (originalPhone != null) {
                String normalizedPhone = PhoneUtils.normalize(originalPhone);
                if (!originalPhone.equals(normalizedPhone)) {
                    result.getClientPhoneChanges().add(new PhoneChange(
                        client.getUuid().toString(),
                        client.getName(),
                        originalPhone,
                        normalizedPhone
                    ));
                }
            }
        }
        result.setClientsProcessed(clients.size());
        result.setClientsUpdated(result.getClientPhoneChanges().size());
        
        // Process users (preview only)
        List<User> users = userRepository.findAll();
        for (User user : users) {
            String originalPhone = user.getPhone();
            if (originalPhone != null && !originalPhone.isBlank()) {
                String normalizedPhone = PhoneUtils.normalize(originalPhone);
                if (!originalPhone.equals(normalizedPhone)) {
                    result.getUserPhoneChanges().add(new PhoneChange(
                        user.getUuid().toString(),
                        user.getFirstName() + " " + user.getLastName(),
                        originalPhone,
                        normalizedPhone
                    ));
                }
            }
        }
        result.setUsersProcessed(users.size());
        result.setUsersUpdated(result.getUserPhoneChanges().size());
        
        return ResponseEntity.ok(result);
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PhoneNormalizationResult {
        private int clientsProcessed = 0;
        private int clientsUpdated = 0;
        private int usersProcessed = 0;
        private int usersUpdated = 0;
        private List<PhoneChange> clientPhoneChanges = new ArrayList<>();
        private List<PhoneChange> userPhoneChanges = new ArrayList<>();
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PhoneChange {
        private String id;
        private String name;
        private String originalPhone;
        private String normalizedPhone;
    }
}
