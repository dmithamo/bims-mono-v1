import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-all-posts',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './all-posts.component.html',
})
export class AllPostsComponent {}
