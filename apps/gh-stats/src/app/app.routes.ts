import { Route } from '@angular/router';
import { NotFoundPageComponent } from '@bims/bims-ui';

export const appRoutes: Route[] = [
  {
    path: '',
    async loadComponent() {
      const m = await import('./routes/homepage/homepage.component');
      return m.HomepageComponent;
    },
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
