import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudyScholarshipComponent } from './admin-study-scholarship.component';

describe('AdminStudyScholarshipComponent', () => {
  let component: AdminStudyScholarshipComponent;
  let fixture: ComponentFixture<AdminStudyScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudyScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudyScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
