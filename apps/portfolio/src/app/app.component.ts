import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { type AppPermission } from '@bims/bims-auth';
import {
  AppIcon,
  AppLayoutComponent,
  TempPageComponent,
  type AppNavItem,
  AppLogoComponent,
  AppHeaderComponent,
} from '@bims/bims-ui';
import { ROUTES } from './utils/definitions';

@Component({
  standalone: true,
  imports: [
    TempPageComponent,
    AppLayoutComponent,
    AppLogoComponent,
    RouterModule,
    AppHeaderComponent,
  ],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'd mithamo';
  appNavItems: Array<AppNavItem & { permissions: Array<AppPermission> }> = [
    {
      href: ROUTES.aboutMe,
      label: 'About me',
      icon: AppIcon.face,
      permissions: [],
    },
    {
      href: ROUTES.experience,
      label: 'Experience',
      icon: AppIcon.experience,
      permissions: [],
    },
    {
      href: ROUTES.cv,
      label: 'Resume',
      icon: AppIcon.file,
      permissions: [],
    },
    {
      href: ROUTES.projects,
      label: 'Projects',
      icon: AppIcon.folder,
      permissions: [],
    },
  ];
}
