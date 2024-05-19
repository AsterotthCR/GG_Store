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
  selector: 'app-slider-shorts',
  templateUrl: './slider-shorts.component.html',
  styleUrls: ['./slider-shorts.component.scss'],
  standalone: true,
  imports :[NgFor, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SliderShortsComponent  implements AfterViewInit {
  images_swiper = [
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
    '../../src/assets/img/prueba2.png',
  ];
  //Parametros del swiper

  swiperParams1= {
    slidesPerView: 5,
    breakpoints: {
      0: {
        slidesPerView: 3,
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
    const swiperAl = document.querySelector('swiper-container');

    if (swiperAl) {
      Object.assign(swiperAl, this.swiperParams1);
    }
  }
}
