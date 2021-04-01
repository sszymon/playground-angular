import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicallyLoadedComponentsRoutingModule } from './dynamically-loaded-components-routing.module';
import { DynamicallyLoadedComponentsComponent } from './dynamically-loaded-components.component';
import { PigComponent } from './pig/pig.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { AnimalHostDirective } from './directives/animal-host.directive';


@NgModule({
  declarations: [DynamicallyLoadedComponentsComponent, PigComponent, CatComponent, DogComponent, AnimalHostDirective],
  imports: [
    CommonModule,
    DynamicallyLoadedComponentsRoutingModule
  ]
})
export class DynamicallyLoadedComponentsModule { }
