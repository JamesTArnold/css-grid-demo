import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-debugging',
  templateUrl: './example-debugging.component.html',
  styleUrls: ['./example-debugging.component.scss']
})
export class ExampleDebuggingComponent implements OnInit {
  static label = 'Debugging';

  labels: string [] = [];
  
  constructor() { 
    for (let i = 1; i < 10; i++) {
      this.labels.push('' + i);
    }
  }

  ngOnInit() {
  }

}
