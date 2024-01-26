import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bims';
}
