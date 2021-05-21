import { Component } from '@angular/core';
import { FRUITS } from './moke-fruits';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Catalogue des Fruits';
fruit= FRUITS;

}
