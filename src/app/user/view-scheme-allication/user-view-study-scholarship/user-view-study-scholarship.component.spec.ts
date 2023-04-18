import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewStudyScholarshipComponent } from './user-view-study-scholarship.component';

describe('UserViewStudyScholarshipComponent', () => {
  let component: UserViewStudyScholarshipComponent;
  let fixture: ComponentFixture<UserViewStudyScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewStudyScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewStudyScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
