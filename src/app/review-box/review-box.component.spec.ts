import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBoxComponent } from './review-box.component';

describe('ReviewBoxComponent', () => {
  let component: ReviewBoxComponent;
  let fixture: ComponentFixture<ReviewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
