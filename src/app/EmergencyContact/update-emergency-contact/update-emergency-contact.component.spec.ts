import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmergencyContactComponent } from './update-emergency-contact.component';

describe('UpdateEmergencyContactComponent', () => {
  let component: UpdateEmergencyContactComponent;
  let fixture: ComponentFixture<UpdateEmergencyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmergencyContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
