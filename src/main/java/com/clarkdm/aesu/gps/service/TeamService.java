package com.clarkdm.aesu.gps.service;

import com.clarkdm.aesu.gps.model.Team;
import com.clarkdm.aesu.gps.repository.TeamRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {
    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public Team getById(Long id) throws NotFoundException {
        return this.teamRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("gps not fond for ID: " + id));
    }

    public List<Team> getAllTeam() {
        return this.teamRepository.findAll();
    }

    public Team saveTeam(Team team) {
        return this.teamRepository.save(team);
    }

    public void deleteById(Long id) {
        this.teamRepository.deleteById(id);
    }
}
