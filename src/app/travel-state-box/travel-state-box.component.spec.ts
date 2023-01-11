import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelStateBoxComponent } from './travel-state-box.component';

describe('TravelStateBoxComponent', () => {
  let component: TravelStateBoxComponent;
  let fixture: ComponentFixture<TravelStateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelStateBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelStateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
