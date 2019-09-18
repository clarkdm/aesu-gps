package com.clarkdm.aesu.gps.controller;

import com.clarkdm.aesu.gps.exception.GpsNotFoundException;
import com.clarkdm.aesu.gps.model.Gps;
import com.clarkdm.aesu.gps.service.GpsService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/api/test")
public class GpsController {
    private final GpsService gpsService;

    public GpsController(GpsService gpsService) {
        this.gpsService = gpsService;
    }

    @RequestMapping(value = "/{id}", method = GET)
    public Gps getGisById(@PathVariable Long id) throws GpsNotFoundException {
        Gps byId = gpsService.getById(id);
        return byId;
    }

}
