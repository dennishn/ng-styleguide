import {Routes} from '@angular/router';
import {NoContentComponent} from './no-content';

let routes: Routes = [
    {path: '', component: NoContentComponent}
];

if (ENV !== 'production') {
    routes.push({path: 'styleguide', loadChildren: './+styleguide#StyleguideModule'});
}

routes.push({path: '**', component: NoContentComponent});

export const ROUTES = routes;
