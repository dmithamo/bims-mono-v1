import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AppHeaderComponent,
  AppLayoutComponent,
  AppNavItem,
  TempPageComponent,
} from '@bims/bims-ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    TempPageComponent,
    AppHeaderComponent,
    AppLayoutComponent,
  ],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bims';
  appNavItems: AppNavItem[] = [];
}
