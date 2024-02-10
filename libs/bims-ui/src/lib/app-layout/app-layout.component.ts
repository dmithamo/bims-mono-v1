import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppBottomNavComponent } from '../app-bottom-nav/app-bottom-nav.component';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppSidebarComponent } from '../app-sidebar/app-sidebar.component';

@Component({
  selector: 'bims-app-layout',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, AppBottomNavComponent, AppSidebarComponent],
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  @Input({ required: true }) appName: string = ""

  sidebarIsOpen = false
  handleToggleSidebar() { }
}

