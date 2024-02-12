import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppIcon } from '../definitions';

export type AppNavItem = {
  href: string;
  label: string;
  icon: AppIcon;
};

@Component({
  selector: 'bims-app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app-bottom-nav.component.html',
})
export class AppBottomNavComponent {
  @Input({ required: true }) appName: string = '';
  @Input({ required: true }) appNavItems: AppNavItem[] = [];
}
