package com.grash.security;

import com.grash.model.OwnUser;
import com.grash.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomOAuth2UserService extends OidcUserService {

    private final UserRepository userRepository;

    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
        // Load the default OIDC user
        OidcUser oidcUser = super.loadUser(userRequest);
        
        // Extract email from the OIDC user
        String email = extractEmail(oidcUser);
        
        if (email == null) {
            log.error("Could not extract email from OIDC user attributes");
            throw new OAuth2AuthenticationException("Email not found in OIDC user attributes");
        }
        
        // Try to find the user in our database
        Optional<OwnUser> userOptional = userRepository.findByEmailIgnoreCase(email);
        
        if (userOptional.isPresent()) {
            // User exists, create CustomOidcUser with the existing user
            OwnUser user = userOptional.get();
            log.debug("Found existing user for email: {}", email);
            return new CustomOidcUser(oidcUser, user);
        } else {
            // User doesn't exist yet - this will be handled by the success handler
            // For now, return a wrapper that preserves the original OIDC user
            log.debug("No existing user found for email: {}, will be created by success handler", email);
            return new CustomOidcUser(oidcUser, null);
        }
    }

    private String extractEmail(OidcUser oidcUser) {
        // Try different attribute names that Keycloak might use
        String email = oidcUser.getEmail();
        
        if (email == null) {
            // Fallback to other possible attribute names
            email = oidcUser.getAttribute("email");
        }
        
        if (email == null) {
            // Try preferred_username if it's an email
            String preferredUsername = oidcUser.getPreferredUsername();
            if (preferredUsername != null && preferredUsername.contains("@")) {
                email = preferredUsername;
            }
        }
        
        return email;
    }
}