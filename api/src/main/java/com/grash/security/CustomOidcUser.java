package com.grash.security;

import com.grash.model.OwnUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.OidcUserInfo;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;

@RequiredArgsConstructor
public class CustomOidcUser implements OidcUser {
    
    private final OidcUser oidcUser;
    private final OwnUser customUser;

    @Override
    public Map<String, Object> getClaims() {
        return oidcUser.getClaims();
    }

    @Override
    public OidcUserInfo getUserInfo() {
        return oidcUser.getUserInfo();
    }

    @Override
    public OidcIdToken getIdToken() {
        return oidcUser.getIdToken();
    }

    @Override
    public Map<String, Object> getAttributes() {
        return oidcUser.getAttributes();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (customUser != null && customUser.getRole() != null) {
            // Use our custom user's role
            return Collections.singleton(
                new SimpleGrantedAuthority(customUser.getRole().getRoleType().getAuthority())
            );
        }
        // Fallback to OIDC user authorities
        return oidcUser.getAuthorities();
    }

    @Override
    public String getName() {
        return oidcUser.getName();
    }

    // Convenience method to get our custom user
    public OwnUser getCustomUser() {
        return customUser;
    }

    // Convenience method to check if we have a custom user
    public boolean hasCustomUser() {
        return customUser != null;
    }

    // Delegate methods for common OIDC attributes
    public String getEmail() {
        return oidcUser.getEmail();
    }

    public String getPreferredUsername() {
        return oidcUser.getPreferredUsername();
    }

    public String getGivenName() {
        return oidcUser.getGivenName();
    }

    public String getFamilyName() {
        return oidcUser.getFamilyName();
    }
}