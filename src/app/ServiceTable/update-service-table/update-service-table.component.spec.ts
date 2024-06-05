import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceTableComponent } from './update-service-table.component';

describe('UpdateServiceTableComponent', () => {
  let component: UpdateServiceTableComponent;
  let fixture: ComponentFixture<UpdateServiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServiceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
