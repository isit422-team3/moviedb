import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { EditProfileComponent } from './edit-profile/edit-profile.component';

=======
import { ApiService } from './services/api.service';
>>>>>>> US002;T1: Adds Injectable API service that any component can use to make api calls.
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
