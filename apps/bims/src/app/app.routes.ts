import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path: 'auth',
  async loadComponent() {
    const m = await import('@bims/auth')
    return m.AuthComponent;
  },

}];
