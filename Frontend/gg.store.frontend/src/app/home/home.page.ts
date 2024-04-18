import { Component } from '@angular/core';
import {
  IonAvatar,
  IonList,
  IonLabel,
  IonIcon, IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonList, IonLabel,IonIcon,IonItem],
})
export class HomePage {
  constructor() {}
}
