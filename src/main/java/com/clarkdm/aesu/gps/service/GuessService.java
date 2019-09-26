package com.clarkdm.aesu.gps.service;

import com.clarkdm.aesu.gps.model.Guess;
import com.clarkdm.aesu.gps.repository.GuessRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuessService {
    private final GuessRepository guessRepository;

    public GuessService(GuessRepository guessRepository) {
        this.guessRepository = guessRepository;
    }

    public Guess getById(Long id) throws NotFoundException {
        return this.guessRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("gps not fond for ID: " + id));
    }

    public List<Guess> getAllGuess() {
        return this.guessRepository.findAll();
    }

    public Guess saveGuess(Guess Guess) {
        return this.guessRepository.save(Guess);
    }

    public void deleteById(Long id) {
        this.guessRepository.deleteById(id);
    }
}
