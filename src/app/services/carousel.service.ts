import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  getCarousel() {
    return [
      {
        id: 1,
        title: 'First slide label',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg'
      },
      {
        id: 2,
        title: 'Second slide label',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg'
      },
      {
        id: 3,
        title: 'Third slide label',
        description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg'
      }
    ];
  }
}

