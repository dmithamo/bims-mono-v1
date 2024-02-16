import { Route } from '@angular/router';
import { AuthFormComponent } from '@bims/bims-auth';
import { NotFoundPageComponent } from '@bims/bims-ui';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    component: AuthFormComponent,
  },
  {
    path: '',
    async loadComponent() {
      const m = await import('./routes/homepage/homepage.component');
      return m.HomepageComponent;
    },
  },
  {
    path: 'all-posts',
    async loadComponent() {
      const m = await import('./routes/all-posts/all-posts.component');
      return m.AllPostsComponent;
    },
  },
  {
    path: 'library',
    async loadComponent() {
      const m = await import('./routes/library/library.component');
      return m.LibraryComponent;
    },
  },
  {
    path: 'settings',
    async loadComponent() {
      const m = await import('./routes/settings/settings.component');
      return m.SettingsComponent;
    },
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
