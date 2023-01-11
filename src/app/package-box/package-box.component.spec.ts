import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBoxComponent } from './package-box.component';

describe('PackageBoxComponent', () => {
  let component: PackageBoxComponent;
  let fixture: ComponentFixture<PackageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
