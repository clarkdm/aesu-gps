package com.clarkdm.aesugps.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "team")
@Data
@NoArgsConstructor
public class Team {

    @Id
    @GeneratedValue
    private Long id;
    @OneToMany
    private Set<Run> runs;
}
