import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides: any[] = [];

  constructor() {}

  ngOnInit() {
    this.slides = ['/assets/images1.jpg', '/assets/images2.jpg', '/assets/images3.jpg']
  }

}
