package com.grash.security;

import com.grash.model.OwnUser;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Utility class to safely extract OwnUser from authentication context,
 * handling both JWT-based CustomUserDetail and OAuth2-based CustomOidcUser
 */
public class AuthenticationHelper {

    /**
     * Safely extracts OwnUser from the current authentication context
     * @return OwnUser if available, null otherwise
     */
    public static OwnUser getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication.getPrincipal() instanceof String) {
            return null;
        }
        
        Object principal = authentication.getPrincipal();
        
        // Handle JWT-based authentication (CustomUserDetail)
        if (principal instanceof CustomUserDetail) {
            return ((CustomUserDetail) principal).getUser();
        }
        
        // Handle OAuth2-based authentication (CustomOidcUser)
        if (principal instanceof CustomOidcUser) {
            CustomOidcUser customOidcUser = (CustomOidcUser) principal;
            if (customOidcUser.hasCustomUser()) {
                return customOidcUser.getCustomUser();
            }
        }
        
        return null;
    }

    /**
     * Checks if current authentication has a valid user
     * @return true if a user is present, false otherwise
     */
    public static boolean hasCurrentUser() {
        return getCurrentUser() != null;
    }
}