import { Component, OnInit } from '@angular/core';
import { AuthorComponent as Author } from './author/author.component';
import { LibraryService } from '../library.service';

@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.css'],
    // directives: [Author]
})
export class AuthorListComponent implements OnInit {

    authors;
    books;
    author: Author[];

    getAuthors(): any {
        this.libraryService.getAuthors()
            .then(res => this.authors = res);
    }

    constructor(private libraryService: LibraryService) { }

    ngOnInit() {
        this.getAuthors();
    }

}
