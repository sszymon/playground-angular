import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router, NavigationEnd, ChildActivationEnd } from '@angular/router';
import { interval, of, Subject, Observable } from 'rxjs';
import { distinctUntilKeyChanged, filter, first, take, takeUntil, tap } from 'rxjs/operators';
import { JSONDataService } from './service/jsondata.service';

@Component({
  selector: 'app-rxjs-seven-good-practices',
  templateUrl: './rxjs-seven-good-practices.component.html',
  styleUrls: ['./rxjs-seven-good-practices.component.scss'],
  providers: [JSONDataService]
})
export class RxjsSevenGoodPracticesComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  infiniteSource$ = interval(600);
  counter$: Observable<number> = this.infiniteSource$;

  animalsSource$ = of(
    { id: 1, name: 'pig' },
    { id: 2, name: 'pig' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'cow' },
    { id: 5, name: 'cow' },
    { id: 6, name: 'pig' },
  );

  takeFirstThree$ = this.infiniteSource$.pipe(
    tap(val => console.log(val)),
    take(3),
  );

  takeFirstResultWitch$ = this.infiniteSource$.pipe(
    takeUntil(this.unsubscribe$),
    tap(val => console.log(val)),
    first(val => val > 7),
  );

  constructor(private dataService: JSONDataService) { // private router: Router
    // router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   tap(event => console.log(event))
    // ).subscribe();

    // console.log(`- - -`);

    // router.events.pipe(
    //   filter((e): e is ChildActivationEnd => e instanceof ChildActivationEnd),
    //   tap(event => console.log(event))

    // this.dataService.getConfig().pipe(
    //   tap(d => console.log(d))
    // ).subscribe();

  }

  ngOnInit(): void {

    // this.animalsSource$.pipe(
    //   distinctUntilKeyChanged('name')
    // ).subscribe(console.log);

    // this.takeFirstResultWitch$.subscribe({
    //   next: () => {},
    //   error: () => {},
    //   complete: () => {},
    // });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  clickHandler(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
