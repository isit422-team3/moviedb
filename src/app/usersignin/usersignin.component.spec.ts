import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersigninComponent } from './usersignin.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms'; // <<<<< klf
import { HttpClientModule }    from '@angular/common/http';  

describe('UsersigninComponent', () => {
  let component: UsersigninComponent;
  let fixture: ComponentFixture<UsersigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersigninComponent ],
      imports: [ RouterModule.forRoot([]), FormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
