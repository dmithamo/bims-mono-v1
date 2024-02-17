import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppIcon, AppIconSize, ButtonComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-otp-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './otp-form.component.html',
})
export class OtpFormComponent {
  veriftOtp() {
    console.log('Hello, world!');
  }

  submitBtnIconSize: AppIconSize = AppIconSize.large;
  submitBtnIconName: AppIcon = AppIcon.send;
  username = 'b@dmithamo.dev';
  usernameVisible: string =
    this.username.slice(0, 4) +
    '***' +
    this.username.slice(this.username.length, -3);
}
