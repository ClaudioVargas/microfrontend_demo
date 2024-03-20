import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('../../../mf-news/src/app/app.component').then((m) => m.AppComponent),
      },
      {
        path: 'user',
        loadComponent: () =>
        import('../../../mf-user/src/app/app.component').then((m) => m.AppComponent),
      },
];
