import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSchemesComponent } from './admin-add-schemes.component';

describe('AdminAddSchemesComponent', () => {
  let component: AdminAddSchemesComponent;
  let fixture: ComponentFixture<AdminAddSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSchemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
