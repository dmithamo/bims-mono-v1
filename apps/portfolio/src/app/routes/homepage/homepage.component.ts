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
  biodata: unknown;
  constructor(private ghApiService: GhApiService) {}

  ngOnInit(): void {
    this.ghApiService.biodata.subscribe((response) => {
      console.log(response);
      this.biodata = JSON.stringify(response, null, 4);
    });
  }
}
