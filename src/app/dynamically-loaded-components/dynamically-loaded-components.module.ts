import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicallyLoadedComponentsRoutingModule } from './dynamically-loaded-components-routing.module';
import { DynamicallyLoadedComponentsComponent } from './dynamically-loaded-components.component';
import { PigComponent } from './pig/pig.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';


@NgModule({
  declarations: [DynamicallyLoadedComponentsComponent, PigComponent, CatComponent, DogComponent],
  imports: [
    CommonModule,
    DynamicallyLoadedComponentsRoutingModule
  ]
})
export class DynamicallyLoadedComponentsModule { }
