import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDebuggingComponent } from './example-debugging.component';

describe('ExampleDebuggingComponent', () => {
  let component: ExampleDebuggingComponent;
  let fixture: ComponentFixture<ExampleDebuggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDebuggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDebuggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
