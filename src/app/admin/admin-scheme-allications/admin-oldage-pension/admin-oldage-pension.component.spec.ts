import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOldagePensionComponent } from './admin-oldage-pension.component';

describe('AdminOldagePensionComponent', () => {
  let component: AdminOldagePensionComponent;
  let fixture: ComponentFixture<AdminOldagePensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOldagePensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOldagePensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
