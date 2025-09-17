package com.grash.service;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.grash.dto.BrandConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BrandingService {

    private final ObjectMapper objectMapper;
    private final LicenseService licenseService;
    @Value("${white-labeling.custom-colors:#{null}}")
    private String customColors;
    @Value("${white-labeling.brand-config:#{null}}")
    private String brandRawConfig;

    public String getMailBackgroundColor() {
        String backgroundColor = "#00A0E3";
        if (customColors != null && !customColors.isEmpty()) {
            ObjectMapper mapper = new ObjectMapper();
            try {
                JsonNode node = mapper.readTree(customColors);
                backgroundColor = node.get("emailColors").asText();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return backgroundColor;
    }

    public BrandConfig getBrandConfig() {
        BrandConfig defaultConfig = BrandConfig.builder()
                .name("davandegan CMMS")
                .shortName("Davandegan")
                .website("https://davandegan.com")
                .mail("info@davandegan.com")
                .phone("+98 2618 4059")
                .addressStreet("Pardis Technology Park, 1rd Floor, Unit 1013")
                .addressCity("Tehran Pardis")
                .build();
        if (!licenseService.isLicenseValid()) return defaultConfig;
        if (brandRawConfig == null || brandRawConfig.isEmpty()) {
            return defaultConfig;
        } else {
            try {
                return objectMapper.readValue(brandRawConfig, BrandConfig.class);
            } catch (Exception e) {
                return defaultConfig;
            }
        }
    }
}
