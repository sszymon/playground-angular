import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyLoadedComponentsComponent } from './dynamically-loaded-components.component';

describe('DynamicallyLoadedComponentsComponent', () => {
  let component: DynamicallyLoadedComponentsComponent;
  let fixture: ComponentFixture<DynamicallyLoadedComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicallyLoadedComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyLoadedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
