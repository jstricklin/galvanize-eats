import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books;

    getBooks(): any {
        this.libraryService.getBooks()
            .then(res => this.books = res);

    }

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
      this.getBooks();
  }

}
