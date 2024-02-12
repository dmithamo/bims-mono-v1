import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AppHeaderComponent,
  AppLayoutComponent,
  TempPageComponent,
} from '@bims/bims-ui';
import { ThoughtsLogoComponent } from './ui/thoughts-logo/thoughts-logo.component';

@Component({
  standalone: true,
  imports: [
    TempPageComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    ThoughtsLogoComponent,
    RouterModule,
  ],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'thoughts';
}
