import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  standalone: true,
  imports: [TempPageComponent, RouterModule],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'thoughts';
}
