/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  public navBarCollapsed: boolean = true;

  private logStyles = [
    'display: block',
    'line-height: 20px',
    'font-weight: bold',
    'text-align: center'
  ];

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    switch(ENV) {
      case 'development':
        this.logStyles.push('color: red');
        break;
      case 'staging':
        this.logStyles.push('color: orange');
        break;
      case 'production':
        this.logStyles.push('color: green');
        break;
      default:
        this.logStyles.push('color: red');
    }

    console.log(`%c App runnin on environment mode: ${ENV}`, this.logStyles.join(';'));
  }

}
