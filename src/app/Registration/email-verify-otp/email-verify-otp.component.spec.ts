import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifyOtpComponent } from './email-verify-otp.component';

describe('EmailVerifyOtpComponent', () => {
  let component: EmailVerifyOtpComponent;
  let fixture: ComponentFixture<EmailVerifyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailVerifyOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerifyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
