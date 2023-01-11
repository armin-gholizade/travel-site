import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be armin ', () => {
    const fixture = TestBed.createComponent(HeaderComponent)
    fixture.detectChanges();
    const compiled=fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.contact>div:nth-of-type(1)>p')?.textContent).toContain('tehran.iran')

  });
  
});
