import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';
import { TBioData } from '../../utils/definitions';

@Component({
  selector: 'bims-homepage',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  bioData: TBioData = {
    name: 'Dennis Mithamo',
    tagline: 'Web developer',
    workedSinceDate: new Date('2018-11-01'),
    ghUsername: 'dmithamo',
    linkedInUsername: 'dennis-mithamo',
    profilePicHref: '',
  };
}
