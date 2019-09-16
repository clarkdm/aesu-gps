package com.clarkdm.aesugps.repository;


import com.clarkdm.aesugps.model.Run;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RunRepository extends CrudRepository<Run, Long> {
    Optional<Run> findById(Long id);

    void deleteById(Long id);
}
