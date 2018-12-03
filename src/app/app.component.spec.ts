import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieScrollerComponent } from './movie-scroller/movie-scroller.component';
import { MoviesComponent } from './movies/movies.component';
import { RatingsComponent } from './ratings/ratings.component';
import { UserComponent } from './user/user.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatFormFieldModule, MatToolbarModule, MatTableModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CreateaccountComponent,
        EditProfileComponent,
        HomeComponent,
        InboxComponent,
        MovieDetailsComponent,
        MovieScrollerComponent,
        MoviesComponent,
        RatingsComponent,
        UserComponent,
        UsersigninComponent
      ],
      imports: [ FormsModule, HttpClientModule, MatIconModule, MatFormFieldModule, 
        MatToolbarModule, RouterModule, MatTableModule, RouterTestingModule,
      MatInputModule, BrowserAnimationsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'moviedb'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('moviedb');
  }));
  it('should render welcome message in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('MovieDB');
  }));
});
