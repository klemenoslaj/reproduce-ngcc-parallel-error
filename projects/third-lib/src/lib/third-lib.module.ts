import { NgModule } from '@angular/core';
import { ThirdLibComponent } from './third-lib.component';
import { FirstLibModule } from 'first-lib';
import { SecondLibModule } from 'second-lib';

@NgModule({
  declarations: [ThirdLibComponent],
  imports: [FirstLibModule, SecondLibModule],
  exports: [ThirdLibComponent],
})
export class ThirdLibModule {}
