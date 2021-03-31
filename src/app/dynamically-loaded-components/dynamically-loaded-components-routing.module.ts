import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicallyLoadedComponentsComponent } from './dynamically-loaded-components.component';

const routes: Routes = [{ path: '', component: DynamicallyLoadedComponentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicallyLoadedComponentsRoutingModule { }
