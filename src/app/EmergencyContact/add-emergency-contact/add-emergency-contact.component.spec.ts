import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmergencyContactComponent } from './add-emergency-contact.component';

describe('AddEmergencyContactComponent', () => {
  let component: AddEmergencyContactComponent;
  let fixture: ComponentFixture<AddEmergencyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmergencyContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
