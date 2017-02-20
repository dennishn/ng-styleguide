import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {routes} from './styleguide-components.routes';
import {StyleguideDialogConfirmComponent} from "./dialogs/styleguide-dialog-confirm.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    StyleguideDialogConfirmComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class StyleguideComponentsModule {
  public static routes = routes;
}
