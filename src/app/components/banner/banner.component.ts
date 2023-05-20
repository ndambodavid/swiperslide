
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {


  @Input() slides: any[] = [];
  swiperModules = [IonicSlides]

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor() { }

  ngOnInit() {}

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any) {
    // console.log('changed:', e);
    
  }
}
