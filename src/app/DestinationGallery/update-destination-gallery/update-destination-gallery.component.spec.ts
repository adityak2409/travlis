import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDestinationGalleryComponent } from './update-destination-gallery.component';

describe('UpdateDestinationGalleryComponent', () => {
  let component: UpdateDestinationGalleryComponent;
  let fixture: ComponentFixture<UpdateDestinationGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDestinationGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDestinationGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
