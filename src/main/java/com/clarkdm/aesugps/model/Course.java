package com.clarkdm.aesugps.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "course")
@Data
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue
    private Long id;
    @OneToMany
    private Set<Gps> targets;
}
