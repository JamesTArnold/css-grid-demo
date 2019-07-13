import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'css-grid-demo';
  destination = '/intro';
  router: any;

  if (destination) {
    this.router.navigate([destination]);
  }
  
}
