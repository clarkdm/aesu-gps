package com.clarkdm.aesu.gps.controller;

import com.clarkdm.aesu.gps.model.Run;
import com.clarkdm.aesu.gps.service.RunService;
import javassist.NotFoundException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/api/run")
public class RunController {
    private final RunService runService;

    public RunController(RunService runService) {
        this.runService = runService;
    }

    @RequestMapping(value = "/{id}", method = GET)
    public Run getRunById(@PathVariable Long id) throws NotFoundException {
        Run byId = runService.getById(id);
        return byId;
    }

    @RequestMapping(value = "/{id}", method = POST)
    public void deleteById(@PathVariable Long id) {
        runService.deleteById(id);
    }

    @RequestMapping(value = "", method = GET)
    public List<Run> getAllRun() {
        return runService.getAllRun();
    }

    @RequestMapping(value = "/role/{role}", method = GET)
    public List<Run> getAllByTeamRole(@PathVariable String role) {
        return runService.getAllByTeamRole(role);
    }

    @RequestMapping(value = "/save", method = POST)
    public Run saveRun(@RequestBody Run run) throws NotFoundException {
        return runService.saveRun(run);
    }


}
