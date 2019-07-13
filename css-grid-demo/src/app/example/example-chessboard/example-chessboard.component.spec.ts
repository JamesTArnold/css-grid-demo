import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleChessboardComponent } from './example-chessboard.component';

describe('ExampleChessboardComponent', () => {
  let component: ExampleChessboardComponent;
  let fixture: ComponentFixture<ExampleChessboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleChessboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleChessboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
