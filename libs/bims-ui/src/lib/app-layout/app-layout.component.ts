import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppNavComponent, AppNavItem } from '../app-nav/app-nav.component';

@Component({
  selector: 'bims-app-layout',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, AppNavComponent],
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  @Input({ required: true }) appName: string = '';
  @Input({ required: true }) appNavItems: AppNavItem[] = [];
}
