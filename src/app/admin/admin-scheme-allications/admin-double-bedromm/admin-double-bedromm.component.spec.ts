import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoubleBedrommComponent } from './admin-double-bedromm.component';

describe('AdminDoubleBedrommComponent', () => {
  let component: AdminDoubleBedrommComponent;
  let fixture: ComponentFixture<AdminDoubleBedrommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoubleBedrommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoubleBedrommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
