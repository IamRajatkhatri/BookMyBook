package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Book;
import com.app.service.BookCrudOperationsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookCrudOperationsController {

    private final BookCrudOperationsService bookOperationsService;

    @Autowired
    public BookCrudOperationsController(BookCrudOperationsService bookOperationsService) {
        this.bookOperationsService = bookOperationsService;
    }

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookOperationsService.getAllBooks();
    }

    @PostMapping("/books")
    public Book createBook(@RequestBody Book newBook) {
        return bookOperationsService.createBook(newBook);
    }

    @DeleteMapping("/books")
    public Book deleteBook(@RequestParam int id) {
        return bookOperationsService.deleteBook(id);
    }

    @PutMapping("/books")
    public Book updateBook(@RequestBody Book updatedBook) {
        return bookOperationsService.updateBook(updatedBook);
    }
}
