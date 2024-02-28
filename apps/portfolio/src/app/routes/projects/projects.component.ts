import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-projects',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {}
