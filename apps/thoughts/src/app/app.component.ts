import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { type AppPermission } from '@bims/bims-auth';
import {
  AppHeaderComponent,
  AppIcon,
  AppLayoutComponent,
  TempPageComponent,
  type AppNavItem,
  AppLogoComponent,
} from '@bims/bims-ui';

@Component({
  standalone: true,
  imports: [
    RouterLink,
    TempPageComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppLogoComponent,
    RouterModule,
  ],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'thoughts';
  appNavItems: Array<AppNavItem & { permissions: Array<AppPermission> }> = [
    {
      href: '/',
      label: 'Home',
      icon: AppIcon.home,
      permissions: [],
    },
    {
      href: '/all-posts',
      label: 'All posts',
      icon: AppIcon.list,
      permissions: [],
    },
    {
      href: '/library',
      label: 'Library',
      icon: AppIcon.book,
      permissions: [],
    },
    {
      href: '/settings',
      label: 'Settings',
      icon: AppIcon.settings,
      permissions: [],
    },
  ];
}
