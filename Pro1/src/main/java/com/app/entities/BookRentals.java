package com.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class BookRentals {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    private Book book;
    @OneToOne
    private Account account;
    private LocalDateTime dateOfRental;
    @JsonIgnore
    private LocalDateTime dateOfReturn;

    public BookRentals(Book book, Account account) {
        this.book = book;
        this.account = account;
    }
}