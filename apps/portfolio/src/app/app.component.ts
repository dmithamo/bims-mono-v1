import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent, TempPageComponent } from '@bims/bims-ui';
import { PortfolioLogoComponent } from './ui/portfolio-logo/portfolio-logo.component';

@Component({
  standalone: true,
  imports: [
    TempPageComponent,
    AppLayoutComponent,
    PortfolioLogoComponent,
    RouterModule,
  ],
  selector: 'bims-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
