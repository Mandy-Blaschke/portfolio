import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {
  randomStartValue = Math.round(Math.random() * 100);

  constructor(public service: MainService) {
  }

  ngOnInit(): void {
  }


  sizeByIndex(i: number): string {
    if (i % 3 === 0) {
      return 'small';
    } else if (i % 3 === 1) {
      return 'medium';
    } else {
      return 'large';
    }
  }

}
