package com.examly.springapp.payload;

import com.examly.springapp.model.User;

public class CurrentUserDTO {

    private User user;

    public CurrentUserDTO(User user) {

        this.user = user;
    }
    public User getUser() {
        return user;
    }
}