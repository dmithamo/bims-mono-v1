import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodWithLabelComponent } from './period-with-label.component';

describe('PeriodWithLabelComponent', () => {
  let component: PeriodWithLabelComponent;
  let fixture: ComponentFixture<PeriodWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodWithLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeriodWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
