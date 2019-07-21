import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  if (destination) {
    this.router.navigate([destination]);
  }

  @HostListener('window:keydown', ['$event'])
  KeyEvent( event: KeyboardEvent) {

  let destination = '';

  if ('event.code = Backslash') {
    destination = '/main-menu';
  }
}
  
}


