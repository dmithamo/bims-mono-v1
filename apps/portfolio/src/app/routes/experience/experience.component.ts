import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-experience',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {}
