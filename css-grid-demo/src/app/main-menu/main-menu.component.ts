import { Component, OnInit } from '@angular/core';

import { examples } from '../examples';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  examples = examples;

  constructor() { }

  ngOnInit() {
  }

}
