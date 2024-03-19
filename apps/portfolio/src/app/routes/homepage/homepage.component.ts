import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TempPageComponent } from '@bims/bims-ui';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'bims-homepage',
  standalone: true,
  imports: [CommonModule, TempPageComponent],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  bioData: unknown;
  constructor(private ghApiService: GhApiService) {}

  ngOnInit(): void {
    this.ghApiService.bioData.subscribe((response) => {
      this.bioData = JSON.stringify((response as Array<unknown>)[0], null, 4);
    });
  }
}
