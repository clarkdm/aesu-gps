package com.clarkdm.aesu.gps.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "guess")
@Data
@NoArgsConstructor
public class Guess {

    @Id
    @GeneratedValue
    private Long id;
    @OneToOne(fetch = FetchType.EAGER)
    private Gps guess;
    @ManyToOne(fetch = FetchType.EAGER)
    private Gps target;
    private Date timeStamp;
}
