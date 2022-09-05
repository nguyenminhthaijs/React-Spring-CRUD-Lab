package com.codevui.todoapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codevui.todoapp.entity.Category;
import com.codevui.todoapp.service.CategoryService;
import com.codevui.todoapp.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategories() {
        // TODO Auto-generated method stub
        return categoryRepository.findAll();
    }
    
}
