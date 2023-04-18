import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplyOldagePensionComponent } from './user-apply-oldage-pension.component';

describe('UserApplyOldagePensionComponent', () => {
  let component: UserApplyOldagePensionComponent;
  let fixture: ComponentFixture<UserApplyOldagePensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplyOldagePensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplyOldagePensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
