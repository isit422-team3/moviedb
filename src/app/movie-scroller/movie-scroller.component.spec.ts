import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieScrollerComponent } from './movie-scroller.component';
import { FormsModule } from '@angular/forms'; // <<<<< klf
import { HttpClientModule }    from '@angular/common/http';  
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('MovieScrollerComponent', () => {
  let component: MovieScrollerComponent;
  let fixture: ComponentFixture<MovieScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieScrollerComponent ],
      imports: [ FormsModule, HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
