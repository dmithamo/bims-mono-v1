import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppIcon } from '../definitions';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'bims-app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Input({ required: true }) appName: string = '';
  @Input() onSearch?: () => void;

  constructor(protected navService: NavService) {}

  openNav() {
    this.navService.toggleNavIsVisible(false);
  }

  appDrawerIcon = AppIcon.menu;
}
