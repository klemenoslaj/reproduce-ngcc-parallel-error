import { NgModule } from '@angular/core';
import { FifthLibComponent } from './fifth-lib.component';
import { ThirdLibModule } from 'third-lib';

@NgModule({
  declarations: [FifthLibComponent],
  imports: [ThirdLibModule],
  exports: [FifthLibComponent],
})
export class FifthLibModule {}
