import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GhStatsLogoComponent } from './gh-stats-logo.component';

describe('GhStatsLogoComponent', () => {
  let component: GhStatsLogoComponent;
  let fixture: ComponentFixture<GhStatsLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhStatsLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GhStatsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
