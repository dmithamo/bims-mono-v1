import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeriodCounterComponent, TempPageComponent } from '@bims/bims-ui';
import { TBioData } from '../../utils/definitions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bims-homepage',
  standalone: true,
  imports: [
    CommonModule,
    TempPageComponent,
    PeriodCounterComponent,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  bioData: TBioData = {
    name: 'Dennis Mithamo',
    tagline: 'Software developer',
    workedSinceDate: new Date('2018-11-05T05:00:00.000Z'),
    ghUsername: 'dmithamo',
    linkedInUsername: 'dennis-mithamo',
    profilePicHref: '',
  };
}
