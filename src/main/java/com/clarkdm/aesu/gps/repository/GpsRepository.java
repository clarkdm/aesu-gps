package com.clarkdm.aesu.gps.repository;


import com.clarkdm.aesu.gps.model.Gps;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GpsRepository extends CrudRepository<Gps, Long> {
    Optional<Gps> findById(Long id);

    void deleteById(Long id);
}
