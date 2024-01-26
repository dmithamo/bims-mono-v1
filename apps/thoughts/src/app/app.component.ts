import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@bims/ui-kit';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'bims-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'thoughts';
}
