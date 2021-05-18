import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-why-co-working',
  templateUrl: './why-co-working.component.html',
  styleUrls: ['./why-co-working.component.scss']
})
export class WhyCoWorkingComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.showNavigationIndicators = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
