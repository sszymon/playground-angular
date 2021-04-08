import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimalType } from '../models/Animal.type';

@Injectable({
  providedIn: 'any'
})
export class AnimalService {

  private animalType = new BehaviorSubject<AnimalType>('cat');
  public animalTypeObservable$ = this.animalType.asObservable();

  constructor(private cfr: ComponentFactoryResolver) { }

  changeAnimal(animal: AnimalType): void {
    this.animalType.next(animal);
  }

  async loadComponent(vcr: ViewContainerRef, animalType: AnimalType) {

    const { PigComponent } = await import('../pig/pig.component');
    const { CatComponent } = await import('../cat/cat.component');
    const { DogComponent } = await import('../dog/dog.component');
    
    vcr.clear();

    let component: any; // todo: check proper type ?? typeof CatComponent | typeof DogComponent…

    switch(animalType) {           
      case 'cat':
        component = CatComponent;
        break;
      case 'dog':
        component = DogComponent;
        break;
      case 'pig':
        component = PigComponent;
        break;
    }

    return vcr.createComponent(
      this.cfr.resolveComponentFactory(component)
    );

  }
}
