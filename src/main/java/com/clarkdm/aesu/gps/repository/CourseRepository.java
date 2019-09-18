package com.clarkdm.aesu.gps.repository;


import com.clarkdm.aesu.gps.model.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
    Optional<Course> findById(Long id);

    void deleteById(Long id);
}
