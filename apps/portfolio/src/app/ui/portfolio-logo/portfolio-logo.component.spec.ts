import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioLogoComponent } from './portfolio-logo.component';

describe('PortfolioLogoComponent', () => {
  let component: PortfolioLogoComponent;
  let fixture: ComponentFixture<PortfolioLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
