package com.clarkdm.aesu.gps.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "team")
@Data
@NoArgsConstructor
public class Team {

    @Id
    @GeneratedValue
    private Long id;
    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany()
    private List<Run> runs;
    private String name = "";
    private String role = "";
}
