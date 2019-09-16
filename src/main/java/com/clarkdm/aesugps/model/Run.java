package com.clarkdm.aesugps.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "run")
@Data
@NoArgsConstructor
public class Run {

    @Id
    @GeneratedValue
    private Long id;
    @OneToOne
    private Course course;
    @OneToOne
    private Team team;
    @OneToMany
    private Set<Guess> guessSet;
}
