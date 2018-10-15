import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { AuthorComponent as Author } from './author/author.component';
import { LibraryService } from '../library.service';

@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.css'],
})

@NgModule({
    declarations: [Author],
})

export class AuthorListComponent implements OnInit {

    authorsData;
    books;

    getAuthors(): any {
        return this.libraryService.getAuthors()
            .then(res => this.authorsData = res);
    }

    constructor(private libraryService: LibraryService) { }

    ngOnInit() {
        this.getAuthors();
    }

}
