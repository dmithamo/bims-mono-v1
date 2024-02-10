import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bims-app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-sidebar.component.html',
})
export class AppSidebarComponent {
  @Input({ required: true }) appName: string = ""
  @Input({ required: true }) isOpen: boolean = false
  @Input({ required: true }) onClose: () => void = () => { }
}
