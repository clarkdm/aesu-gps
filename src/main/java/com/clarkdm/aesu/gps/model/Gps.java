package com.clarkdm.aesu.gps.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "gps")
@Data
@NoArgsConstructor
public class Gps {

    @Id
    @GeneratedValue
    private Long id;
    @Column(columnDefinition = "double")
    private Float latitude;
    @Column(columnDefinition = "double")
    private Float longitude;
}
