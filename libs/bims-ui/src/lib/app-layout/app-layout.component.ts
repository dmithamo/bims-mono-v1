import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppBottomNavComponent, AppHeaderComponent } from '../../index';

@Component({
  selector: 'bims-app-layout',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, AppBottomNavComponent],
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  @Input({ required: true }) appName: string = ""

  handleToggleSidebar() { }
}

