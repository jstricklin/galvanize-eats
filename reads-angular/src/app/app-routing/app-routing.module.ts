import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BookListComponent } from '../book-list/book-list.component';
import { AuthorListComponent } from '../author-list/author-list.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
},
    {
        path: 'books',
        component: BookListComponent,
    },
    {
        path: 'authors',
        component: AuthorListComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
