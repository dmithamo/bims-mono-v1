import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AppHeaderComponent,
  AppLayoutComponent,
  AppLogoComponent,
  type AppNavItem,
  TempPageComponent,
} from '@bims/bims-ui';

@Component({
  standalone: true,
  imports: [
    AppLayoutComponent,
    TempPageComponent,
    AppLogoComponent,
    RouterModule,
    AppHeaderComponent,
  ],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'GH Stats';
  appNavItems: AppNavItem[] = [];
}
