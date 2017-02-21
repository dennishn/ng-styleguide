import {Component} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {DialogConfirmComponent} from '../shared/ui/components/dialogs/confirm/dialog-confirm.component';

@Component({
    selector: 'no-content',
    template: `
    <div>
       <button (click)="openModal()">OPEN</button>
      <h1>404: page missing</h1>
    </div>
  `
})
export class NoContentComponent {

    constructor(private modalService: NgbModal) {
    }

    openModal() {
        const modalRef = this.modalService.open(DialogConfirmComponent);
    }
}
