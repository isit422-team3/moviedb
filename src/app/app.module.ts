import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';


import { ApiService } from './services/api.service';
import { DbClientService } from './services/db-client.service';
import { MovieScrollerComponent } from './movie-scroller/movie-scroller.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RatingsComponent } from './ratings/ratings.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ReviewComponent } from './review/review.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditProfileComponent,
    MovieScrollerComponent,
    HomeComponent,
    MovieDetailsComponent,
    RatingsComponent,
    UsersigninComponent,
    CreateaccountComponent,
    ReviewComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [
    ApiService, 
    DbClientService,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
