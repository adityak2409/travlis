import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserSocialMediaComponent } from './update-user-social-media.component';

describe('UpdateUserSocialMediaComponent', () => {
  let component: UpdateUserSocialMediaComponent;
  let fixture: ComponentFixture<UpdateUserSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
