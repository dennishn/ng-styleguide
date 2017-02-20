import { StyleguideComponent } from './styleguide.component';

export const routes = [
  { path: '', children: [
    { path: '', redirectTo: 'base', pathMatch: 'full'},
    { path: 'base', component: StyleguideComponent, loadChildren: './+styleguide-base#StyleguideBaseModule' },
    { path: 'components', component: StyleguideComponent, loadChildren: './+styleguide-components#StyleguideComponentsModule' }
  ]},
];
