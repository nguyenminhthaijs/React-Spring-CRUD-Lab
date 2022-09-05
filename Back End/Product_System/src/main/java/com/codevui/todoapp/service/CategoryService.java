package com.codevui.todoapp.service;

import com.codevui.todoapp.entity.Category;
import com.codevui.todoapp.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CategoryService {
    
    public List<Category> getAllCategories();
}
