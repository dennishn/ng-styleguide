import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './styleguide.routes';
import { StyleguideComponent } from './styleguide.component';
import {StyleguideBaseModule} from "./+styleguide-base/styleguide-base.module";
import {SharedModule} from "../shared/shared.module";

console.log('`Styleguide` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    StyleguideComponent,
  ],
  imports: [
    StyleguideBaseModule,
    RouterModule.forChild(routes),
  ],
})
export class StyleguideModule {
  public static routes = routes;
}
