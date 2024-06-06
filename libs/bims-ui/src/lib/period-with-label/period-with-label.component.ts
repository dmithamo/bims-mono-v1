import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bims-period-with-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './period-with-label.component.html',
})
export class PeriodWithLabelComponent {
  period = input.required<{
    amount: string;
    label: string;
  }>();
}
