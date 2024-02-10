import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bims-app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Input({ required: true }) appName: string = '';
}
