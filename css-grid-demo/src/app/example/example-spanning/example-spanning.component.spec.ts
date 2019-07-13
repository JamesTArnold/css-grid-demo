import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSpanningComponent } from './example-spanning.component';

describe('ExampleSpanningComponent', () => {
  let component: ExampleSpanningComponent;
  let fixture: ComponentFixture<ExampleSpanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSpanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSpanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
