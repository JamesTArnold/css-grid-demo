import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSandboxComponent } from './example-sandbox.component';

describe('ExampleSandboxComponent', () => {
  let component: ExampleSandboxComponent;
  let fixture: ComponentFixture<ExampleSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
