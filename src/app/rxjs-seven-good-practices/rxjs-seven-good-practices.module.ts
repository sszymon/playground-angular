import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsSevenGoodPracticesRoutingModule } from './rxjs-seven-good-practices-routing.module';
import { RxjsSevenGoodPracticesComponent } from './rxjs-seven-good-practices.component';


@NgModule({
  declarations: [RxjsSevenGoodPracticesComponent],
  imports: [
    CommonModule,
    RxjsSevenGoodPracticesRoutingModule
  ]
})
export class RxjsSevenGoodPracticesModule { }
