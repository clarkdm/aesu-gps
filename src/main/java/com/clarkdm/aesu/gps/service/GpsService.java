package com.clarkdm.aesu.gps.service;

import com.clarkdm.aesu.gps.exception.GpsNotFoundException;
import com.clarkdm.aesu.gps.model.Gps;
import com.clarkdm.aesu.gps.repository.GpsRepository;
import org.springframework.stereotype.Service;

@Service
public class GpsService {
    private final GpsRepository gpsRepository;

    public GpsService(GpsRepository gpsRepository) {
        this.gpsRepository = gpsRepository;
    }

    public Gps getById(Long id) throws GpsNotFoundException {
        return this.gpsRepository.findById(id)
                .orElseThrow(() -> new GpsNotFoundException("gps not fond for ID: " + id));
    }
}
