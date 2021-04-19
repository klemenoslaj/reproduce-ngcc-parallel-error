import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-third-lib',
  template: `
    <lib-first-lib></lib-first-lib>
    <lib-second-lib></lib-second-lib>
  `,
  styles: [
  ]
})
export class ThirdLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
