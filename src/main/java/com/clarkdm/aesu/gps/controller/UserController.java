package com.clarkdm.aesu.gps.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;


@RestController
public class UserController {
    @RequestMapping("/api/user")
    public Principal user(Principal user) {
        return user;
    }
}
