import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookListComponent } from './book-list/book-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book-list/book/book.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorComponent } from './author-list/author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    DashboardComponent,
    BookComponent,
    AuthorListComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
      FormsModule,
      AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
