import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'rxjs-7-good-practices', 
    loadChildren: () => import('./rxjs-seven-good-practices/rxjs-seven-good-practices.module').then(m => m.RxjsSevenGoodPracticesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
