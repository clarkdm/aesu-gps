package com.clarkdm.aesugps.service;

import com.clarkdm.aesugps.exception.GpsNotFoundException;
import com.clarkdm.aesugps.model.Gps;
import com.clarkdm.aesugps.repository.GpsRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GpsService {
    private final GpsRepository gpsRepository;

    public GpsService(GpsRepository gpsRepository) {
        this.gpsRepository = gpsRepository;
    }

    public Gps getById(Long id) throws GpsNotFoundException {
        Optional<Gps> byId = this.gpsRepository.findById(id);
        return byId.orElseThrow(() -> new GpsNotFoundException("gps not fond for ID: " + id));
    }
}
