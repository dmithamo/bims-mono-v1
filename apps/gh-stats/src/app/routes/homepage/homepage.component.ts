import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-homepage',
  standalone: true,
  imports: [TempPageComponent, CommonModule],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {}
