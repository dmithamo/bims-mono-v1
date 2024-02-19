import { CommonModule } from '@angular/common';
import { Component, Renderer2, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppIcon, AppIconSize, ButtonComponent } from '@bims/bims-ui';

@Component({
  selector: 'bims-otp-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './otp-form.component.html',
})
export class OtpFormComponent {
  constructor(private renderer: Renderer2) {}

  showPasteDisabledMsg: WritableSignal<boolean> = signal(false);

  verifyOtp() {}

  submitBtnIconSize: AppIconSize = AppIconSize.large;
  submitBtnIconName: AppIcon = AppIcon.send;
  username = 'b@dmithamo.dev';
  usernameVisible: string =
    this.username.slice(0, 4) +
    '***' +
    this.username.slice(this.username.length, -3);

  OTP_LENGTH = 5;
  getOtpFieldsArray() {
    return Array(this.OTP_LENGTH);
  }

  handleKeydownInOtpField(e: KeyboardEvent, fieldIdx: number) {
    const isDigit = /\d/.test(e.key);
    if (
      !isDigit &&
      e.key !== 'Backspace' &&
      e.key !== 'Delete' &&
      e.key !== 'Tab' &&
      !e.metaKey
    ) {
      e.preventDefault();
      return;
    }

    if ((e.key === 'Backspace' || e.key === 'Delete') && +fieldIdx > 0) {
      setTimeout(() => {
        this.renderer.selectRootElement(`#otp-${+fieldIdx - 1}`).focus();
      });
    }

    if (isDigit && +fieldIdx < this.OTP_LENGTH - 1) {
      setTimeout(() => {
        this.renderer.selectRootElement(`#otp-${+fieldIdx + 1}`).focus();
      });
    }
  }

  handleFocus(e: FocusEvent) {
    (e.target as HTMLInputElement).select();
  }

  handlePaste(e: ClipboardEvent) {
    const text = e.clipboardData?.getData('text') || '';

    if (!/^\d+$/.test(text)) return;

    const digits = text.split('');

    for (let i = 0; i < this.OTP_LENGTH; i++) {
      this.renderer
        .selectRootElement(`#otp-${i}`)
        .setAttribute('value', digits[i]);
    }
  }
}
