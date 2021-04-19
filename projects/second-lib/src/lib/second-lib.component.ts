import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-second-lib',
  template: `
    <p>
      second-lib works!
    </p>
  `,
  styles: [
  ]
})
export class SecondLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
