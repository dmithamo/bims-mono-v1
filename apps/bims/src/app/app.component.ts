import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TempPageComponent } from '@bims/bims-ui';

@Component({
  standalone: true,
  imports: [RouterModule, TempPageComponent],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bims';
}
