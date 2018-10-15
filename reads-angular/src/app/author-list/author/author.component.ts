import { Component, OnInit } from '@angular/core';

export class Author {
    first: string;
    last: string;
    bio: string;
    image: string;
    hide: boolean;

    toggle() {
        this.hide = !this.hide;
    }

    constructor(first: string, last: string, bio: string, image: string) {
        this.first = first;
        this.last = last;
        this.bio = bio;
        this.image = image;
        this.hide = true;
    }
}

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
    author: Author;
}
