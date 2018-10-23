import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
    { path: 'user', component: UserComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'editProfile', component: EditProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserComponent, MoviesComponent, EditProfileComponent]