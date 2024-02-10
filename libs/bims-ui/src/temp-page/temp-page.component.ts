import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bims-temp-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp-page.component.html',
})
export class TempPageComponent {
  @Input({ required: true }) appName: string = ""
}
