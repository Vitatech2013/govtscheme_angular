import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKalyanaLaxmiComponent } from './admin-kalyana-laxmi.component';

describe('AdminKalyanaLaxmiComponent', () => {
  let component: AdminKalyanaLaxmiComponent;
  let fixture: ComponentFixture<AdminKalyanaLaxmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKalyanaLaxmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKalyanaLaxmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
