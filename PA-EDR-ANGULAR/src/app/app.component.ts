import { Component } from '@angular/core';
import { EdrComponent } from './edr/edr.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projet Annuel';
  rootpage: any = EdrComponent
}
