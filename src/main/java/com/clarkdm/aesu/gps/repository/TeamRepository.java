package com.clarkdm.aesu.gps.repository;


import com.clarkdm.aesu.gps.model.Team;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long> {
    Optional<Team> findById(Long id);

    void deleteById(Long id);

    List<Team> findAll();
}
