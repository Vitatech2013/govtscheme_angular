import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewDoubleBedroomComponent } from './user-view-double-bedroom.component';

describe('UserViewDoubleBedroomComponent', () => {
  let component: UserViewDoubleBedroomComponent;
  let fixture: ComponentFixture<UserViewDoubleBedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewDoubleBedroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewDoubleBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
