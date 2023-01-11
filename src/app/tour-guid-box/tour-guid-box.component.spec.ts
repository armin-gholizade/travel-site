import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuidBoxComponent } from './tour-guid-box.component';

describe('TourGuidBoxComponent', () => {
  let component: TourGuidBoxComponent;
  let fixture: ComponentFixture<TourGuidBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourGuidBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourGuidBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
