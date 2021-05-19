import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  counter = 0;
  constructor() {
  }
  ngOnInit(): void {
    setInterval(this.progressBar, 3000);
  }
  progressBar() {
    const x = document.getElementById('progress-circle-border');
    let count = 0;
    console.log(this.counter);
    if (count === 0) {
      x.classList.add('percentage-25');
    } else if (x.classList.contains('percentage-25')) {
      x.classList.add('percentage-50');
    } else if (x.classList.contains('percentage-50')) {
      x.classList.add('percentage-75');
    } else if (x.classList.contains('percentage-75')) {
      x.classList.add('percentage-100');
    }
    count++;
    this.counter = count;
  }
}
