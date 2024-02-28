import { Route } from '@angular/router';
import { NotFoundPageComponent } from '@bims/bims-ui';

export const appRoutes: Route[] = [
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
