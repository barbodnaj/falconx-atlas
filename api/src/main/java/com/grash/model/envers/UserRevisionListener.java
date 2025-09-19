package com.grash.model.envers;

import com.grash.model.OwnUser;
import com.grash.model.envers.RevInfo;
import com.grash.security.AuthenticationHelper;
import org.hibernate.envers.RevisionListener;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Component;

public class UserRevisionListener implements RevisionListener
{
    public void newRevision(Object revisionEntity)
    {
        RevInfo revision = (RevInfo) revisionEntity;
        OwnUser user = AuthenticationHelper.getCurrentUser();
        if (user == null) return;

        revision.setUser(user);
    }
}