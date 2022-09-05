package com.codevui.todoapp.controller;

import java.util.List;

import com.codevui.todoapp.entity.Product;
import com.codevui.todoapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@Controller
@RequestMapping("/product") // root enpoint
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("")
    public List<Product> getAllUsers() {
        List<Product> products = productService.getAllProduct();
        return products;
    }


    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        Product product = productService.getProductById(id);
        return product;
    }
}
