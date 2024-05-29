import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bims-app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-logo.component.html',
})
export class AppLogoComponent {
  @Input({ required: true }) appName: string = '';
}
