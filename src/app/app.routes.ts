import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(component => component.Home)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about').then(component => component.About)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects').then(
        component => component.Projects
      )
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact').then(
        component => component.Contact
      )
  },
  {
    path: 'fun',
    loadComponent: () =>
      import('./features/fun/fun').then(component => component.Fun)
  },
  {
    path: '**',
    redirectTo: ''
  }
];