import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationGalleryListComponent } from './destination-gallery-list.component';

describe('DestinationGalleryListComponent', () => {
  let component: DestinationGalleryListComponent;
  let fixture: ComponentFixture<DestinationGalleryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationGalleryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationGalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
