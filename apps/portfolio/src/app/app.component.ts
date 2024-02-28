import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { type AppPermission } from '@bims/bims-auth';
import {
  AppIcon,
  AppLayoutComponent,
  TempPageComponent,
  type AppNavItem,
} from '@bims/bims-ui';
import { PortfolioLogoComponent } from './ui/portfolio-logo/portfolio-logo.component';

@Component({
  standalone: true,
  imports: [
    TempPageComponent,
    AppLayoutComponent,
    PortfolioLogoComponent,
    RouterModule,
  ],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
  appNavItems: Array<AppNavItem & { permissions: Array<AppPermission> }> = [
    {
      href: '/',
      label: 'About me',
      icon: AppIcon.face,
      permissions: [],
    },
    {
      href: '/experience',
      label: 'Experience',
      icon: AppIcon.experience,
      permissions: [],
    },
    {
      href: '/resume.pdf',
      label: 'Resume',
      icon: AppIcon.file,
      permissions: [],
    },
    {
      href: '/projects',
      label: 'Projects',
      icon: AppIcon.folder,
      permissions: [],
    },
  ];
}
