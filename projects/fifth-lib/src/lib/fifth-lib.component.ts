import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-fifth-lib',
  template: `
    <lib-third-lib></lib-third-lib>
  `,
  styles: [
  ]
})
export class FifthLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
