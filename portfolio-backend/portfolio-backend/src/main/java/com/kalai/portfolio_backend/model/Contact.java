package com.kalai.portfolio_backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "contact_messages")
@Data
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    @Column(columnDefinition = "TEXT")
    private String message;
}