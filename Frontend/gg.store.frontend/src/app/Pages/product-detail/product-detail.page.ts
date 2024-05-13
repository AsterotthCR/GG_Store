import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonRow,
  IonCol,
  IonLabel,
  IonButton,IonGrid,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard, IonGrid,
    IonRow,
    IonCol,
    IonCardContent,
    IonLabel,
    IonItem,
    IonButton,
    IonInput,
  ],
})
export class ProductDetailPage implements OnInit {
  constructor() {}

  ngOnInit() {
    const plus: HTMLElement | null = document.querySelector('.plus');
    const minus: HTMLElement | null = document.querySelector('.minus');
    const num: HTMLElement | null = document.querySelector('.num');

    let i: number = 0;

    if (plus && minus && num) {
      plus.addEventListener("click", () => {
        i++;
        if (num) num.innerHTML = i.toString();
      });

      minus.addEventListener("click", () => {
        if (num && parseInt(num.innerHTML) > 0) {
          i--;
          if (num) num.innerHTML = i.toString();
        }
      });
    }
  }
}
