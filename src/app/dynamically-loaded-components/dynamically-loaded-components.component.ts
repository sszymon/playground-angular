import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { mergeMap, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AnimalHostDirective } from './directives/animal-host.directive';
import { AnimalService } from './services/animal.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dynamically-loaded-components',
  templateUrl: './dynamically-loaded-components.component.html',
  styleUrls: ['./dynamically-loaded-components.component.scss']
})
export class DynamicallyLoadedComponentsComponent implements OnInit, OnDestroy {

  @ViewChild(AnimalHostDirective, { static: true })
  animalHost: AnimalHostDirective|null = null;
  private destroySubject = new Subject();

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    if (this.animalHost !== null) {
      const vcr = this.animalHost.vcr;

      this.animalService.animalTypeObservable$
        .pipe(
          takeUntil(this.destroySubject),
          mergeMap(animal => this.animalService.loadComponent(vcr, animal))
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  displayCat(): void {
    this.animalService.changeAnimal('cat');
  }

  displayDog(): void {
    this.animalService.changeAnimal('dog');
  }

  displayPig(): void {
    this.animalService.changeAnimal('pig');
  }

}
