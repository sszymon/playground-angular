import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSevenGoodPracticesComponent } from './rxjs-seven-good-practices.component';

describe('RxjsSevenGoodPracticesComponent', () => {
  let component: RxjsSevenGoodPracticesComponent;
  let fixture: ComponentFixture<RxjsSevenGoodPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsSevenGoodPracticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSevenGoodPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
