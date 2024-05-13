import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle, IonButton, 
  IonToolbar,
} from '@ionic/angular/standalone';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule, IonButton,
  ],
})
export class IntroPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    //Inyección para que pasado un tiempo, envie al home
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 1500);
  }
}
