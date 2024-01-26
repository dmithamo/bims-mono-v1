import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@bims/ui-kit';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
