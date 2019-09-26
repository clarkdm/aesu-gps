package com.clarkdm.aesu.gps.controller;

import com.clarkdm.aesu.gps.model.Guess;
import com.clarkdm.aesu.gps.service.GuessService;
import javassist.NotFoundException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/api/guess")
public class GuessController {
    private final GuessService guessService;

    public GuessController(GuessService guessService) {
        this.guessService = guessService;
    }

    @RequestMapping(value = "/{id}", method = GET)
    public Guess getGuessById(@PathVariable Long id) throws NotFoundException {
        Guess byId = guessService.getById(id);
        return byId;
    }

    @RequestMapping(value = "/{id}", method = POST)
    public void deleteById(@PathVariable Long id) {
        guessService.deleteById(id);
    }

    @RequestMapping(value = "", method = GET)
    public List<Guess> getAllGuess() {
        return guessService.getAllGuess();
    }

    @RequestMapping(value = "", method = POST)
    public Guess saveGuess(@RequestBody Guess guess) {
        return guessService.saveGuess(guess);
    }


}
