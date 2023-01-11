import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardSectionComponent } from './reward-section.component';

describe('RewardSectionComponent', () => {
  let component: RewardSectionComponent;
  let fixture: ComponentFixture<RewardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
