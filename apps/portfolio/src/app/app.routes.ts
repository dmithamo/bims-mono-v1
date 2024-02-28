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
    path: 'projects',
    async loadComponent() {
      const m = await import('./routes/projects/projects.component');
      return m.ProjectsComponent;
    },
  },
  {
    path: 'experience',
    async loadComponent() {
      const m = await import('./routes/experience/experience.component');
      return m.ExperienceComponent;
    },
  },
  {
    path: 'resume.pdf',
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
