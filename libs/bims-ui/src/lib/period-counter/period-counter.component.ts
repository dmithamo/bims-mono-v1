import {
  Component,
  computed,
  effect,
  input,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { periodCalculator } from '../../utils/period-calculator';
import { TClockSize, TPeriodBtnDates } from '../../utils/definitions';
import { PeriodWithLabelComponent } from '../period-with-label/period-with-label.component';

@Component({
  selector: 'bims-period-counter',
  standalone: true,
  imports: [CommonModule, PeriodWithLabelComponent],
  templateUrl: './period-counter.component.html',
})
export class PeriodCounterComponent implements OnInit {
  startDate = input.required<Date>();
  endDate = input<Date>();
  currentDate = signal<Date>(new Date());

  periodLimit = computed<Date>(() => this.endDate() || this.currentDate());

  dateString = computed(() => this.currentDate().getDate());
  timeString = computed(() => this.currentDate().getTime());

  periodElapsed: Signal<TPeriodBtnDates> = computed(() =>
    periodCalculator({
      startDate: this.startDate(),
      endDate: this.periodLimit(),
    })
  );

  size = input<TClockSize>();
  clockSizeClass = computed<string>(() => {
    switch (this.size()) {
      default:
        return 'w-[50px] h-[50px]';
    }
  });
  protected readonly Object = Object;

  constructor() {
    effect(() => {});
  }

  ngOnInit() {
    setInterval(() => {
      this.currentDate.set(new Date());
    }, 1000);
  }
}
