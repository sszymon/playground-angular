import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAnimalHost]'
})
export class AnimalHostDirective {

  constructor(public vcr: ViewContainerRef) { }

}
