import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSendFeedbackComponent } from './user-send-feedback.component';

describe('UserSendFeedbackComponent', () => {
  let component: UserSendFeedbackComponent;
  let fixture: ComponentFixture<UserSendFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSendFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSendFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
