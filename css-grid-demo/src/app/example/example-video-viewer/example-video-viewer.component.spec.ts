import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleVideoViewerComponent } from './example-video-viewer.component';

describe('ExampleVideoViewerComponent', () => {
  let component: ExampleVideoViewerComponent;
  let fixture: ComponentFixture<ExampleVideoViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleVideoViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleVideoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
