package com.clarkdm.aesugps.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gps")
@Data
@NoArgsConstructor
public class Gps {

    @Id
    @GeneratedValue
    private Long id;
    private Float latitude;
    private Float longitude;
}
