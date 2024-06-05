import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTypeListComponent } from './trip-type-list.component';

describe('TripTypeListComponent', () => {
  let component: TripTypeListComponent;
  let fixture: ComponentFixture<TripTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
