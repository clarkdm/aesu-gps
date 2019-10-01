package com.clarkdm.aesu.gps.service;

import com.clarkdm.aesu.gps.model.Guess;
import com.clarkdm.aesu.gps.model.Run;
import com.clarkdm.aesu.gps.repository.RunRepository;
import com.clarkdm.aesu.gps.repository.TeamRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RunService {
    private final RunRepository runRepository;
    private final TeamRepository teamRepository;

    public RunService(RunRepository runRepository, TeamRepository teamRepository) {
        this.runRepository = runRepository;
        this.teamRepository = teamRepository;
    }

    public Run getById(Long id) throws NotFoundException {
        return this.runRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("gps not fond for ID: " + id));
    }

    public List<Run> getAllByTeamRole(String role) {
        return this.runRepository.findAllByTeam_Role(role);
    }

    public List<Run> getAllRun() {
        return this.runRepository.findAll();
    }

    public Run saveRun(Run run) {
        run.setGuessList(run.getCourse().getTargets().stream().map(gps -> {
            Guess guess = new Guess();
            guess.setTarget(gps);
            return guess;
        }).collect(Collectors.toList()));
        return this.runRepository.save(run);
    }

    public void deleteById(Long id) {
        this.runRepository.deleteById(id);
    }
}
