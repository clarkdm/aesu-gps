package com.clarkdm.aesu.gps.repository;


import com.clarkdm.aesu.gps.model.Run;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RunRepository extends CrudRepository<Run, Long> {
    Optional<Run> findById(Long id);

    void deleteById(Long id);
}
