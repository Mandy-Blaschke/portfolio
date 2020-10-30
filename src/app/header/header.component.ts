import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service: MainService) {
  }

  ngOnInit(): void {
  }

}
