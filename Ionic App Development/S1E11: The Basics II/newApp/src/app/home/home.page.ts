import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  count: number = 0;

  constructor(private router: Router) {}

  incrementCounter(){
    this.count += 1;
  }

  access() {
    this.router.navigateByUrl('/contact')
    this.incrementCounter()
  }
}
