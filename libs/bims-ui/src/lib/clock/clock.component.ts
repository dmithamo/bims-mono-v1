import { Component, computed, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TClockSize } from '../definitions';

@Component({
  selector: 'bims-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit {
  datetime = input<Date>();
  currentDatetime = signal<Date>(new Date());

  size = input<TClockSize>();
  clockSizeClass = computed<string>(() => {
    switch (this.size()) {
      default:
        return 'w-[120px] h-[120px]';
    }
  });

  ngOnInit() {
    setInterval(() => {
      this.currentDatetime.set(new Date());
    }, 1000);
  }
}
