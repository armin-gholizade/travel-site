import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationPopupComponent } from './destination-popup.component';

describe('DestinationPopupComponent', () => {
  let component: DestinationPopupComponent;
  let fixture: ComponentFixture<DestinationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
