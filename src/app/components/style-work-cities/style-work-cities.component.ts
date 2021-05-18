import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-style-work-cities',
  templateUrl: './style-work-cities.component.html',
  styleUrls: ['./style-work-cities.component.scss']
})
export class StyleWorkCitiesComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

}
