import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsSevenGoodPracticesComponent } from './rxjs-seven-good-practices.component';

const routes: Routes = [{ path: '', component: RxjsSevenGoodPracticesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsSevenGoodPracticesRoutingModule { }
