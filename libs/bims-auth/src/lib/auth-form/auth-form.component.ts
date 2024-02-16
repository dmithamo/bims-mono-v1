import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bims-auth-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent {
  @Input({ required: true }) appName: string = '';
  @Input({ required: true }) redirectUrl: string = '';
}
