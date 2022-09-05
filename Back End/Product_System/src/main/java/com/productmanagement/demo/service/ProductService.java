package com.codevui.todoapp.service;

import com.codevui.todoapp.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProductService {
    public List<Product> getAllProduct();

    Product getProductById(int id);

    public Product updateProduct(Product product);

    public Product deleteProduct(int id);

    
}
