package com.clarkdm.aesugps.controller;

import com.clarkdm.aesugps.exception.GpsNotFoundException;
import com.clarkdm.aesugps.model.Gps;
import com.clarkdm.aesugps.service.GpsService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping(value = "/test")
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
