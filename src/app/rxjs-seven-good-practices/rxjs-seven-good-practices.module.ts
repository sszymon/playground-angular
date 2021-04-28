import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RxjsSevenGoodPracticesRoutingModule } from './rxjs-seven-good-practices-routing.module';
import { RxjsSevenGoodPracticesComponent } from './rxjs-seven-good-practices.component';

@NgModule({
  declarations: [RxjsSevenGoodPracticesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RxjsSevenGoodPracticesRoutingModule
  ]
})
export class RxjsSevenGoodPracticesModule { }
