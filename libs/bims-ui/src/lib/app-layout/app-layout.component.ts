import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  AppBottomNavComponent,
  AppNavItem,
} from '../app-bottom-nav/app-bottom-nav.component';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppSidebarComponent } from '../app-sidebar/app-sidebar.component';

@Component({
  selector: 'bims-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    AppHeaderComponent,
    AppBottomNavComponent,
    AppSidebarComponent,
  ],
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  @Input({ required: true }) appName: string = '';
  @Input({ required: true }) appNavItems: AppNavItem[] = [];

  isSidebarOpen = false;
  toggleSidebarOpen() {}
}
