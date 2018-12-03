import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingsComponent } from './ratings.component';
import { FormsModule } from '@angular/forms'; // <<<<< klf
import { HttpClientModule }    from '@angular/common/http';  
import { MatTableModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('RatingsComponent', () => {
  let component: RatingsComponent;
  let fixture: ComponentFixture<RatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsComponent ],
      imports: [ FormsModule, HttpClientModule, MatTableModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
