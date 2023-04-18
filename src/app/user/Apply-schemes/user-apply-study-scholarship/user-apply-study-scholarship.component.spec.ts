import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplyStudyScholarshipComponent } from './user-apply-study-scholarship.component';

describe('UserApplyStudyScholarshipComponent', () => {
  let component: UserApplyStudyScholarshipComponent;
  let fixture: ComponentFixture<UserApplyStudyScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplyStudyScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplyStudyScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
