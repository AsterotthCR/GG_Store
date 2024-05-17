import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports :[NgFor, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SliderComponent  implements AfterViewInit {
  swiper_images = [
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
    '../../src/assets/img/prueba1.png',
  ];
  //Parametros del swiper

  swiperParams1= {
    slidesPerView: 1,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      640: {
        slidesPerView: 4, // Cambiado a 3 para mostrar 3 imágenes en pantallas de celular
        spaceBetween: 20
      },
      947: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      1040: {
        slidesPerView: 6,
        spaceBetween: 10
      },
    },
  }; 

  constructor() {}

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container');

    if (swiperEl) {
      Object.assign(swiperEl, this.swiperParams1);
    }
  }
}
