import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFullViewportComponent } from './example-full-viewport.component';

describe('ExampleFullViewportComponent', () => {
  let component: ExampleFullViewportComponent;
  let fixture: ComponentFixture<ExampleFullViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFullViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFullViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
