import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bims-temp-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
  @Input({ required: true }) appName: string = '';
}
