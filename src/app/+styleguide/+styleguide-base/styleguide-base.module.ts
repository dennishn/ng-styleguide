import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './styleguide-base.routes';
import {StyleguideColorsComponent} from "./colors/styleguide-colors.component";
import {SharedModule} from "../../shared/shared.module";

console.log('`StyleguideBaseModule` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    StyleguideColorsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class StyleguideBaseModule {
  public static routes = routes;
}
