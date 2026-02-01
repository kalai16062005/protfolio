package com.kalai.portfolio_backend.controller;

import com.kalai.portfolio_backend.model.Contact;
import com.kalai.portfolio_backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "*") // Frontend connect panna ithu mukkiyam
public class ContactController {

    @Autowired
    private ContactRepository repo;

    @PostMapping
    public String saveMessage(@ModelAttribute Contact contact) {
        try {
            repo.save(contact);
            return "Message received successfully!";
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}