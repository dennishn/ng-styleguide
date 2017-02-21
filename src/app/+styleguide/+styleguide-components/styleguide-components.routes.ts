import {StyleguideDialogConfirmComponent} from "./dialogs/styleguide-dialog-confirm.component";

export const routes = [
    {
        path: 'dialogs', children: [
        {path: 'confirm', component: StyleguideDialogConfirmComponent},
    ]
    },
];
