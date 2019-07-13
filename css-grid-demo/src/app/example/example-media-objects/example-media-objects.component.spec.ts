import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMediaObjectsComponent } from './example-media-objects.component';

describe('ExampleMediaObjectsComponent', () => {
  let component: ExampleMediaObjectsComponent;
  let fixture: ComponentFixture<ExampleMediaObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleMediaObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMediaObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
