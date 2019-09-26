package com.clarkdm.aesu.gps.repository;


import com.clarkdm.aesu.gps.model.Guess;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GuessRepository extends CrudRepository<Guess, Long> {
    Optional<Guess> findById(Long id);

    void deleteById(Long id);

    List<Guess> findAll();
}
