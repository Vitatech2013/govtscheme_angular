import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewSchemesComponent } from './user-view-schemes.component';

describe('UserViewSchemesComponent', () => {
  let component: UserViewSchemesComponent;
  let fixture: ComponentFixture<UserViewSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewSchemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
