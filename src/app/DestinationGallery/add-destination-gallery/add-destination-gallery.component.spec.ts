import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDestinationGalleryComponent } from './add-destination-gallery.component';

describe('AddDestinationGalleryComponent', () => {
  let component: AddDestinationGalleryComponent;
  let fixture: ComponentFixture<AddDestinationGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDestinationGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDestinationGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
