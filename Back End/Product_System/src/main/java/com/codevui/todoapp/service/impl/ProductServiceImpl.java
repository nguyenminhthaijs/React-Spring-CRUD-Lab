package com.codevui.todoapp.service.impl;

import com.codevui.todoapp.entity.Product;
import com.codevui.todoapp.repository.ProductRepository;
import com.codevui.todoapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;
    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product updateProduct(Product product) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Product deleteProduct(int id) {
        // TODO Auto-generated method stub
        return null;
    }
}
