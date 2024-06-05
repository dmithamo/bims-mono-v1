import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppLogoComponent } from '../app-logo/app-logo.component';
import { AppNavComponent, AppNavItem } from '../app-nav/app-nav.component';

@Component({
  selector: 'bims-app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    AppLogoComponent,
    AppNavComponent,
  ],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Input({ required: true }) appName: string = '';
  @Input() onSearch?: () => void;
  @Input({ required: true }) appNavItems: AppNavItem[] = [];
}
