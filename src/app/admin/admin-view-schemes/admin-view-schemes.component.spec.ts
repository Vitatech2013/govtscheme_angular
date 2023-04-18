import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSchemesComponent } from './admin-view-schemes.component';

describe('AdminViewSchemesComponent', () => {
  let component: AdminViewSchemesComponent;
  let fixture: ComponentFixture<AdminViewSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewSchemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
