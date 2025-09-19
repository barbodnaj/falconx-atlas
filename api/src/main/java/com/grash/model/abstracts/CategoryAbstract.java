package com.grash.model.abstracts;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.grash.model.CompanySettings;
import com.grash.model.OwnUser;
import com.grash.security.AuthenticationHelper;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.validation.constraints.NotNull;

@Data
@MappedSuperclass
@NoArgsConstructor
public abstract class CategoryAbstract extends Audit {

    @NotNull
    private String name;

    private String description;

    @ManyToOne
    @JoinColumn(nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private CompanySettings companySettings;

    @PrePersist
    public void beforePersist() {
        OwnUser user = AuthenticationHelper.getCurrentUser();
        if (user == null) return;
        CompanySettings companySettings = user.getCompany().getCompanySettings();
        this.setCompanySettings(companySettings);
    }

    public CategoryAbstract(String name, CompanySettings companySettings) {
        this.name = name;
        this.companySettings = companySettings;
    }

}
