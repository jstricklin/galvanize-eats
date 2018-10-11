import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LibraryService {
    baseURL = 'http://localhost:3000';
    getAuthors() {
        return fetch(`${this.baseURL}/authors`)
            .then(authors => authors.json());
    }
    getBooks() {
        return fetch(`${this.baseURL}/books`)
            .then(books => books.json());
    }



    constructor() { }
}
