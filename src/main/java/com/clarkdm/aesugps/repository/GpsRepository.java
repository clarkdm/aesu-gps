package com.clarkdm.aesugps.repository;


import com.clarkdm.aesugps.model.Gps;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GpsRepository extends CrudRepository<Gps, Long> {
    Optional<Gps> findById(Long id);

    void deleteById(Long id);
}
