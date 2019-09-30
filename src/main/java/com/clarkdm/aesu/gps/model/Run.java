package com.clarkdm.aesu.gps.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "run")
@Data
@EqualsAndHashCode(exclude = "team")
@NoArgsConstructor
public class Run {

    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER)
    private Course course;
    @OneToOne(fetch = FetchType.EAGER)
    private Team team;


    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(cascade = CascadeType.ALL)
    private List<Guess> guessList;



}
