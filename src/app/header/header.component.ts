import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  nav: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  toggleNav = (): void => {
    this.nav = !this.nav;
  };
}
