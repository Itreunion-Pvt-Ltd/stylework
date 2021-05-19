import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  div: string;

  constructor() { }

  ngOnInit(): void {
    setInterval(this.swapText, 3000);
    setInterval(this.swapImg, 3000);

    // window.setInterval(, 2000);
  }
  infoText(div) {
    this.div = div;
  }
  swapText() {
    const x = document.getElementById('swap-text');
    if (x.innerHTML === 'Business') {
      x.innerHTML = 'Work';
    } else if (x.innerHTML === 'Work') {
      x.innerHTML = 'Innovative team';
    } else {
      x.innerHTML = 'Business';
    }
  }
  swapImg() {
    const x = document.getElementById('swap-img');
    if (x.getAttribute('src') === 'assets/images/landing_rectangle.png') {
      x.setAttribute('src', 'https://via.placeholder.com/576x605.png');
    } else if (x.getAttribute('src') === 'https://via.placeholder.com/576x605.png') {
      x.setAttribute('src', 'assets/images/landing_rectangle.png');
    }
  }
}
