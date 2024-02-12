import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-settings',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {}
