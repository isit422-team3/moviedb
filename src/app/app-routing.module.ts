import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'reviews', redirectTo: '/home', pathMatch: 'full' },
    { path: 'ratings', redirectTo: '/home', pathMatch: 'full' },
    { path: 'user', component: UserComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'editProfile', component: EditProfileComponent},
    { path: 'movieDetails', component: MovieDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserComponent, MoviesComponent, EditProfileComponent, MovieDetailsComponent]