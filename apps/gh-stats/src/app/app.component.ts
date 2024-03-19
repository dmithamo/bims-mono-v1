import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AppLayoutComponent,
  type AppNavItem,
  TempPageComponent,
} from '@bims/bims-ui';
import { GhStatsLogoComponent } from './ui/gh-stats-logo/gh-stats-logo.component';

@Component({
  standalone: true,
  imports: [
    AppLayoutComponent,
    GhStatsLogoComponent,
    TempPageComponent,
    RouterModule,
  ],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'GH Stats';
  navItems: AppNavItem[] = [];
}
