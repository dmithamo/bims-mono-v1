import { Route } from '@angular/router';
import { NotFoundPageComponent } from '@bims/bims-ui';
import { ROUTES } from './utils/definitions';

export const appRoutes: Route[] = [
  {
    path: ROUTES.homepage,
    async loadComponent() {
      const m = await import('./routes/homepage/homepage.component');
      return m.HomepageComponent;
    },
  },
  {
    path: ROUTES.projects,
    async loadComponent() {
      const m = await import('./routes/projects/projects.component');
      return m.ProjectsComponent;
    },
  },
  {
    path: ROUTES.experience,
    async loadComponent() {
      const m = await import('./routes/experience/experience.component');
      return m.ExperienceComponent;
    },
  },
  {
    path: ROUTES.resume,
    async loadComponent() {
      const m = await import('./routes/resume/resume.component');
      return m.ResumeComponent;
    },
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
