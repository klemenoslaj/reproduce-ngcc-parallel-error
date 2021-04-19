import { NgModule } from '@angular/core';
import { FourthLibComponent } from './fourth-lib.component';
import { FirstLibModule } from 'first-lib';
import { ThirdLibModule } from 'third-lib';

@NgModule({
  declarations: [FourthLibComponent],
  imports: [FirstLibModule, ThirdLibModule],
  exports: [FourthLibComponent],
})
export class FourthLibModule {}
