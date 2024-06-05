import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceTableComponent } from './add-service-table.component';

describe('AddServiceTableComponent', () => {
  let component: AddServiceTableComponent;
  let fixture: ComponentFixture<AddServiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
