import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RatingsComponent } from './ratings/ratings.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ReviewComponent } from './review/review.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'ratings', component: RatingsComponent},
    { path: 'user', component: UserComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'editProfile', component: EditProfileComponent},
    { path: 'movieDetails', component: MovieDetailsComponent},
    { path: 'userSignIn', component: UsersigninComponent},
    { path: 'createAccount', component: CreateaccountComponent},
    { path: 'review', component: ReviewComponent},
    { path: 'inbox', component: InboxComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserComponent, MoviesComponent, EditProfileComponent,
     MovieDetailsComponent, ReviewComponent, InboxComponent]