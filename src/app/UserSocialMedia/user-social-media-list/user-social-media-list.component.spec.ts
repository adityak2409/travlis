import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocialMediaListComponent } from './user-social-media-list.component';

describe('UserSocialMediaListComponent', () => {
  let component: UserSocialMediaListComponent;
  let fixture: ComponentFixture<UserSocialMediaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSocialMediaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSocialMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
