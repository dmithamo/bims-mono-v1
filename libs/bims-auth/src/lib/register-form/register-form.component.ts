import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppIcon, AppIconSize, ButtonComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-register-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  createAccount() {
    console.log('Hello, world!');
  }

  submitBtnIconSize: AppIconSize = AppIconSize.large;
  submitBtnIconName: AppIcon = AppIcon.send;
}
