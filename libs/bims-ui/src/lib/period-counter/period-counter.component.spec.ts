import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodCounterComponent } from './period-counter.component';

describe('PeriodCounterComponent', () => {
  let component: PeriodCounterComponent;
  let fixture: ComponentFixture<PeriodCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeriodCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
