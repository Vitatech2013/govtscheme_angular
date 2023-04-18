import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplyDoubleBedroomComponent } from './user-apply-double-bedroom.component';

describe('UserApplyDoubleBedroomComponent', () => {
  let component: UserApplyDoubleBedroomComponent;
  let fixture: ComponentFixture<UserApplyDoubleBedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplyDoubleBedroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplyDoubleBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
