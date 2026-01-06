package com.westwood.service;

import com.westwood.common.dto.ActivateAccountRequest;
import com.westwood.common.dto.InviteUserRequest;
import com.westwood.common.dto.UserDto;

public interface InvitationService {
    UserDto inviteUser(InviteUserRequest request);
    UserDto activateAccount(ActivateAccountRequest request);
}

