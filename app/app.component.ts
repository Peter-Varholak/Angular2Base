import {Component} from '@angular/core';
import {Config} from './config.service';

@Component({
  selector: 'my-app',
  template: '<h1>{{ heading }}</h1>'
})
export class AppComponent {
  heading = "Testing";
}
