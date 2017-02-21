import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'sg-colors',
    styleUrls: [
        './styleguide-colors.component.scss'
    ],
    templateUrl: 'styleguide-colors.component.html',
})
export class StyleguideColorsComponent implements OnInit {

    public colorsRosequartz: Array<string> = [
        'light-salmon',
        'pale-salmon',
        'pale-salmon-two',
        'rose-quartz',
        'light-tan',
        'pale-rose',
        'very-light-pink'
    ];
    public colorsSerenity: Array<string> = [
        'greyblue-two',
        'bluegrey',
        'greyblue',
        'serenity',
        'cloudy-blue',
        'light-blue-grey-two',
        'light-blue-grey'
    ];

    public grays: Array<string> = [
        'black',
        'charcoal-grey',
        'charcoal-grey-two',
        'slate-grey',
        'cool-grey-two',
        'silver-two',
        'pale-grey'
    ];

    public colorsMisc: Array<string> = [
        'silver',
        'cool-grey',
        'silver-20',
        'red',
        'red-5',
        'green',
        'green-5',
        'yellow',
        'yellow-5'
    ];

    public gradients: Array<string> = [
        'gradient-serenity-rose-quartz',
        'gradient-rose-quartz-serenity',
    ];

    public ngOnInit() {

    }

}
