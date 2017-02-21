import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'sg',
    styleUrls: [
        './styleguide.component.scss'
    ],
    templateUrl: 'styleguide.component.html',
})
export class StyleguideComponent implements OnInit {

    public ngOnInit() {
        console.log('hello `StyleguideComponent` component');
    }

}
