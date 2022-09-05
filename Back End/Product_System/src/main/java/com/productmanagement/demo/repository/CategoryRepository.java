package com.codevui.todoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codevui.todoapp.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{
    
}
