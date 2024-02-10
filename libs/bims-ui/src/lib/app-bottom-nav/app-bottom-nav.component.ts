import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bims-app-bottom-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-bottom-nav.component.html',
})
export class AppBottomNavComponent {
  @Input({ required: true }) appName: string = '';
}
