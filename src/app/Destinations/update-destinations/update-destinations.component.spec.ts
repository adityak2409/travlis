import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDestinationsComponent } from './update-destinations.component';

describe('UpdateDestinationsComponent', () => {
  let component: UpdateDestinationsComponent;
  let fixture: ComponentFixture<UpdateDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDestinationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
