import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';


import { ApiService } from './services/api.service';
import { DbClientService, SiteMovieModel } from './services/db-client.service';
import { MovieScrollerComponent } from './movie-scroller/movie-scroller.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditProfileComponent,
    MovieScrollerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService, 
    SiteMovieModel,
    DbClientService,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
