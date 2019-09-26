package com.clarkdm.aesu.gps.service;

import com.clarkdm.aesu.gps.model.Run;
import com.clarkdm.aesu.gps.repository.RunRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RunService {
    private final RunRepository runRepository;

    public RunService(RunRepository runRepository) {
        this.runRepository = runRepository;
    }

    public Run getById(Long id) throws NotFoundException {
        return this.runRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("gps not fond for ID: " + id));
    }

    public List<Run> getAllRun() {
        return this.runRepository.findAll();
    }

    public Run saveRun(Run run) {
        return this.runRepository.save(run);
    }

    public void deleteById(Long id) {
        this.runRepository.deleteById(id);
    }
}
