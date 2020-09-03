import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-carousel-brands',
  templateUrl: './carousel-brands.component.html',
  styleUrls: ['./carousel-brands.component.scss']
})
export class CarouselBrandsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  }

}
