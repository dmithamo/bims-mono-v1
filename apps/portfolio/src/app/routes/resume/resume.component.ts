import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-resume',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './resume.component.html',
})
export class ResumeComponent {}
