import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { ApiService } from './services/api.service';
import { DbClientService, SiteMovieModel } from './services/db-client.service';
import { MovieScrollerComponent } from './movie-scroller/movie-scroller.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditProfileComponent,
    MovieScrollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ApiService, 
    SiteMovieModel,
    DbClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
