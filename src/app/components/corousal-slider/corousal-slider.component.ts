import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-corousal-slider',
  templateUrl: './corousal-slider.component.html',
  styleUrls: ['./corousal-slider.component.scss']
})
export class CorousalSliderComponent {
  title = 'ng-carousel-demo';
  
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  
    slides = [
      {id: "1", img: "https://dummyimage.com/350x150/423b42/fff"},
      {id: "2", img: "https://dummyimage.com/350x150/2a2b7a/fff"},
      {id: "3", img: "https://dummyimage.com/350x150/1a2b7a/fff"},
      {id: "4", img: "https://dummyimage.com/350x150/7a2b7a/fff"},
      {id: "5", img: "https://dummyimage.com/350x150/9a2b7a/fff"},
      {id: "6", img: "https://dummyimage.com/350x150/5a2b7a/fff"},
      {id: "7", img: "https://dummyimage.com/350x150/4a2b7a/fff"}
    ];

    constructor(
      private readonly http: HttpClient,
    ) {}
  
    ngOnInit() {
      // this.fetch()
    }
  
  
    // fetch() {
    //   const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    //   const http$ = this.http.get<PhotosApi>(api);
  
    //   http$.subscribe(
    //     res => this.apiData = res,
    //     err => throwError(err)
    //   )
    // }
  }
