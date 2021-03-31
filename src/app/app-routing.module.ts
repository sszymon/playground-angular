import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'rxjs-7-good-practices', 
    loadChildren: () => import('./rxjs-seven-good-practices/rxjs-seven-good-practices.module').then(m => m.RxjsSevenGoodPracticesModule)
  },
  { 
    path: 'dynamically-loaded-components', 
    loadChildren: () => import('./dynamically-loaded-components/dynamically-loaded-components.module').then(m => m.DynamicallyLoadedComponentsModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
