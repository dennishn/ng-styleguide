import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {DialogConfirmComponent} from "./ui";

@NgModule({
    declarations: [DialogConfirmComponent],
    imports: [CommonModule],
    exports: [CommonModule, FormsModule],
    // Export dynamically created components
    entryComponents: [DialogConfirmComponent]
})
export class SharedModule {
}