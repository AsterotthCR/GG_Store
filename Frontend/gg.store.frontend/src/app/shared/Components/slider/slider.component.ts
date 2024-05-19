import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
} from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SliderComponent implements AfterViewInit, OnInit {
  products = [
    {
      id: 9,
      img: '../../src/assets/img/prueba1.png',
      name: 'Sudadera de gatitos',
      description: 'Extremadamente adorable',
      price: '$35',
    },
    {
      id: 10,
      img: '../../src/assets/img/prueba1.png',
      name: 'Pantalon Blanco',
      description: 'Moldea la figura',
      price: '$20',
    },
    {
      id: 11,
      img: '../../src/assets/img/prueba1.png',
      name: 'Camisa con estampado',
      description: 'Calidad de tela',
      price: '$10',
    },
    {
      id: 12,
      img: '../../src/assets/img/prueba1.png',
      name: 'Chaqueta',
      description: 'Excelente calidad',
      price: '$50',
    },
  ];

  swiperParams1 = {
    slidesPerView: 1,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      947: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1040: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    // Inicialización adicional si es necesario
  }

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('.swiper');

    if (swiperEl) {
      Object.assign(swiperEl, this.swiperParams1);
    }
  }
}
