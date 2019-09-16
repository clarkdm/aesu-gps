package com.clarkdm.aesugps.repository;


import com.clarkdm.aesugps.model.Team;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long> {
    Optional<Team> findById(Long id);

    void deleteById(Long id);
}
