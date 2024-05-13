import { Component } from '@angular/core';
import {
  IonAvatar,
  IonList,
  IonLabel,
  IonIcon,
  IonItem,
  IonListHeader,
  IonButton, IonCardHeader, IonCard, IonContent,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { SliderComponent } from 'src/app/shared/Components/slider/slider.component';
import { SliderShortsComponent } from 'src/app/shared/Components/slider-shorts/slider-shorts.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonList,
    IonLabel,
    IonIcon,
    IonItem,
    IonListHeader,
    IonButton,
    IonCardTitle,
    IonCardSubtitle,IonCardHeader, IonCard, IonContent,
    SliderComponent,
    SliderShortsComponent,
  ],
})
export class HomePage {
  constructor() {}
}
