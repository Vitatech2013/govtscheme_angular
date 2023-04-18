import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewKalyanalaxmiComponent } from './user-view-kalyanalaxmi.component';

describe('UserViewKalyanalaxmiComponent', () => {
  let component: UserViewKalyanalaxmiComponent;
  let fixture: ComponentFixture<UserViewKalyanalaxmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewKalyanalaxmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewKalyanalaxmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
