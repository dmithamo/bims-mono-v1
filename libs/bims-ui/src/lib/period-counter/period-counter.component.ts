import {
  Component,
  computed,
  effect,
  input,
  Input,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { periodCalculator } from '../../utils/period-calculator';
import { TPeriodBtnDates } from '../definitions';
import { PeriodWithLabelComponent } from '../period-with-label/period-with-label.component';

interface TPeriodWithLabel {
  amount: number;
  label: string;
}

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

  constructor() {
    effect(() => {});
  }

  ngOnInit() {
    setInterval(() => {
      this.currentDate.set(new Date());
    }, 1000);
  }
}
