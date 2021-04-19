import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-fourth-lib',
  template: `
    <lib-first-lib></lib-first-lib>
    <lib-third-lib></lib-third-lib>
  `,
  styles: [
  ]
})
export class FourthLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
