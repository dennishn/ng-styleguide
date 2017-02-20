import {
  Component
} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {DialogConfirmComponent} from "../../../shared/ui/components/dialogs/confirm/dialog-confirm.component";

@Component({
  selector: 'sg-dialog-confirm',
  styleUrls: [
    './styleguide-dialog-confirm.component.scss'
  ],
  templateUrl: 'styleguide-dialog-confirm.component.html',
})
export class StyleguideDialogConfirmComponent {

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(DialogConfirmComponent);

    modalRef.componentInstance.title = 'Delete Vapor Instance?';
    modalRef.componentInstance.body = 'This action cannot be undone!';
    modalRef.componentInstance.bodyHtml = '<h1>hej</h1>';
    modalRef.componentInstance.confirmButton = 'Yes, delete';
    modalRef.componentInstance.cancelButton = 'No';
    modalRef.componentInstance.state = 'danger';

    modalRef.result.then(
        (positive) => {console.info('modal positive')},
        (negative) => {console.log('modal negative')}
    );
  }

}
