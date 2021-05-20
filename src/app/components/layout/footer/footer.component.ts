import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  counter: any;
  constructor() {
  }
  ngOnInit(): void {
    setInterval(this.progressBar, 3000);
  }
  progressBar() {
    const x = document.getElementById('progress-circle-border');
    const count = 0;
    if (count === 0 && !x.classList.contains('percentage-25') && !x.classList.contains('percentage-50') && !x.classList.contains('percentage-75') && !x.classList.contains('percentage-100')) {
      x.classList.add('percentage-25');
    } else if (x.classList.contains('percentage-25')) {
      x.classList.add('percentage-50');
      x.classList.remove('percentage-25');
    } else if (x.classList.contains('percentage-50')) {
      x.classList.add('percentage-75');
      x.classList.remove('percentage-50');
    } else if (x.classList.contains('percentage-75')) {
      x.classList.add('percentage-100');
      x.classList.remove('percentage-75');
    } else if (x.classList.contains('percentage-100')) {
      x.classList.remove('percentage-100');
    }
  }
}
