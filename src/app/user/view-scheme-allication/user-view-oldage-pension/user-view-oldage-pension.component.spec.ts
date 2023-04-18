import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewOldagePensionComponent } from './user-view-oldage-pension.component';

describe('UserViewOldagePensionComponent', () => {
  let component: UserViewOldagePensionComponent;
  let fixture: ComponentFixture<UserViewOldagePensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewOldagePensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewOldagePensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
