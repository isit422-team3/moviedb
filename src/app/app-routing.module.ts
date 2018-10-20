import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
    { path: 'user', component: UserComponent},
    { path: 'movies', component: MoviesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserComponent, MoviesComponent]