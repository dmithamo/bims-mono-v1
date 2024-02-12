import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-homepage',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {}
