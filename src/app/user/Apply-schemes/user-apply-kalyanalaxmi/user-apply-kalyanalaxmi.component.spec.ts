import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplyKalyanalaxmiComponent } from './user-apply-kalyanalaxmi.component';

describe('UserApplyKalyanalaxmiComponent', () => {
  let component: UserApplyKalyanalaxmiComponent;
  let fixture: ComponentFixture<UserApplyKalyanalaxmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplyKalyanalaxmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplyKalyanalaxmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
