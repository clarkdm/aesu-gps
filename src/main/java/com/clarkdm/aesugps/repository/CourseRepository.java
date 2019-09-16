package com.clarkdm.aesugps.repository;


import com.clarkdm.aesugps.model.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
    Optional<Course> findById(Long id);

    void deleteById(Long id);
}
