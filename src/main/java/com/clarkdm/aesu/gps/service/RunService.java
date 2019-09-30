package com.clarkdm.aesu.gps.service;

import com.clarkdm.aesu.gps.model.Run;
import com.clarkdm.aesu.gps.repository.RunRepository;
import com.clarkdm.aesu.gps.repository.TeamRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<Run> getAllByTeamRole(String rolt) {
        return this.runRepository.findAllByTeam_Role(rolt);
    }

    public List<Run> getAllRun() {
        return this.runRepository.findAll();
    }

    public Run saveRun(Run run) throws NotFoundException {
//        Team team = teamRepository.findById(teamId).orElseThrow(() -> new NotFoundException(""));

        return this.runRepository.save(run);

    }

    public void deleteById(Long id) {
        this.runRepository.deleteById(id);
    }
}
