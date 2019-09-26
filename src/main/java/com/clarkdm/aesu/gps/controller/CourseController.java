package com.clarkdm.aesu.gps.controller;

import com.clarkdm.aesu.gps.model.Course;
import com.clarkdm.aesu.gps.service.CourseService;
import javassist.NotFoundException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping(value = "/api/course")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @RequestMapping(value = "/{id}", method = GET)
    public Course getCourseById(@PathVariable Long id) throws NotFoundException {
        Course byId = courseService.getById(id);
        return byId;
    }

    @RequestMapping(value = "/{id}", method = POST)
    public void deleteById(@PathVariable Long id) {
        courseService.deleteById(id);
    }

    @RequestMapping(value = "", method = GET)
    public List<Course> getAllCourse() {
        return courseService.getAllCourse();
    }

    @RequestMapping(value = "", method = POST)
    public Course saveCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }


}
