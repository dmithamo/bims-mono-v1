import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AppIcon } from '../definitions';
import { NavService } from '../services/nav.service';

export type AppNavItem = {
  href: string;
  label: string;
  icon: AppIcon;
};

@Component({
  selector: 'bims-app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app-nav.component.html',
})
export class AppNavComponent {
  @Input({ required: true }) appName: string = '';
  @Input({ required: true }) appNavItems: AppNavItem[] = [];

  closeIcon = AppIcon.close;
  navDrawerIcon = AppIcon.apps;
  isAuthenticated = false;

  constructor(protected navService: NavService, private router: Router) {}

  openNav() {
    this.navService.toggleNavIsVisible({ isOpen: false });
  }
  closeNav() {
    this.navService.toggleNavIsVisible({ isOpen: true });
  }

  handleLogout() {
    this.closeNav();
    this.router.navigate(['/']);
  }

  appDrawerIcon = AppIcon.menu;
  headerItems: AppNavItem[] = [];
}
