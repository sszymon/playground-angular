<ng-container *ngIf="
  {
    obs1: obs1$ | async,
    obs2: obs2$ | async,
    obs3: obs3$ | async
  } as observables">
    <!--    already expanded observable!-->
    {{observables.obs1}}
</ng-container>
