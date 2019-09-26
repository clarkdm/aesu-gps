package com.clarkdm.aesu.gps.model;

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
    @OneToOne(fetch = FetchType.EAGER)
    private Course course;
    @OneToOne(fetch = FetchType.EAGER)
    private Team team;
    @OneToMany(fetch = FetchType.EAGER)
    private Set<Guess> guessSet;
}
