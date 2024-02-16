import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppIcon, AppIconSize } from '../definitions';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'bims-button',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: true }) onClick: () => void = () => {};
  @Input({ required: true }) label: string = '';
  @Input() type?: 'submit' | 'button' = 'submit';
  @Input() iconName: AppIcon = AppIcon.bug;
  @Input() iconSize: AppIconSize = AppIconSize.default;
  @Input() isDisabled?: boolean;
}
