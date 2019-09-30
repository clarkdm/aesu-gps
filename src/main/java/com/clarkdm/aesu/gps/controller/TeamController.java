package com.clarkdm.aesu.gps.controller;

import com.clarkdm.aesu.gps.model.Team;
import com.clarkdm.aesu.gps.service.TeamService;
import javassist.NotFoundException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/api/team")
public class TeamController {
    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @RequestMapping(value = "/{id}", method = GET)
    public Team getTeamById(@PathVariable Long id) throws NotFoundException {
        return teamService.getById(id);
    }

    @RequestMapping(value = "/{id}", method = POST)
    public void deleteById(@PathVariable Long id) {
        teamService.deleteById(id);
    }

    @RequestMapping(value = "/role/{role}", method = GET)
    public Team findByRole(@PathVariable String role) {
        return teamService.findByRole(role);
    }

    @RequestMapping(value = "", method = GET)
    public List<Team> getAllTeam() {
        return teamService.getAllTeam();
    }

    @RequestMapping(value = "", method = POST)
    public Team saveTeam(@RequestBody Team team) {
        return teamService.saveTeam(team);
    }


}
