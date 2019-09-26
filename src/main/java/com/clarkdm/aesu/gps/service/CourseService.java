package com.clarkdm.aesu.gps.service;

import com.clarkdm.aesu.gps.model.Course;
import com.clarkdm.aesu.gps.repository.CourseRepository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course getById(Long id) throws NotFoundException {
        return this.courseRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("gps not fond for ID: " + id));
    }

    public List<Course> getAllCourse() {
        return this.courseRepository.findAll();
    }

    public Course saveCourse(Course course) {
        return this.courseRepository.save(course);
    }

    public void deleteById(Long id) {
        this.courseRepository.deleteById(id);
    }
}
