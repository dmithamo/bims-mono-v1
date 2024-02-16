import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppIcon, AppIconSize } from '../definitions';

@Component({
  selector: 'bims-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
})
export class SvgIconComponent {
  @Input({ required: true }) iconName: AppIcon = AppIcon.bug;
  @Input() iconSize: AppIconSize = AppIconSize.default;

  iconSizeMap: Record<AppIconSize, `${number}px`> = {
    large: '26px',
    default: '12px',
    small: '8px',
  };

  mappedIconSize = this.iconSizeMap[this.iconSize];
}
