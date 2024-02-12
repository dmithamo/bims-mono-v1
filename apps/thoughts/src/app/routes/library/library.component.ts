import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-library',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './library.component.html',
})
export class LibraryComponent {}
