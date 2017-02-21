import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'ui-dialog-confirm',
    templateUrl: 'dialog-confirm.component.html',
})
export class DialogConfirmComponent implements OnInit {
    @Input() title: string;
    @Input() body: string;
    @Input() bodyHtml: any;
    @Input() confirmButton: string;
    @Input() cancelButton: string;
    @Input() state: string;

    constructor(public activeModal: NgbActiveModal,
                private sanitizer: DomSanitizer) {
        console.log(this.bodyHtml, this.activeModal);
    }

    ngOnInit() {
        if (this.bodyHtml) {
            this.bodyHtml = this.sanitizer.bypassSecurityTrustHtml(this.bodyHtml);
        }
        console.log(this.state)
    }

    close() {
        this.activeModal.close();
    }

    dismiss() {
        this.activeModal.dismiss();
    }

}
