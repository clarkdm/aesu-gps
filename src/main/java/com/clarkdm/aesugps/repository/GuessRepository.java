package com.clarkdm.aesugps.repository;


import com.clarkdm.aesugps.model.Guess;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GuessRepository extends CrudRepository<Guess, Long> {
    Optional<Guess> findById(Long id);

    void deleteById(Long id);
}
