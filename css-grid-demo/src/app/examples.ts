import { ExampleBlocksComponent } from './example/example-blocks/example-blocks.component';
import { ExampleFullViewportComponent } from './example/example-full-viewport/example-full-viewport.component';
import { ExampleChessboardComponent } from './example/example-chessboard/example-chessboard.component';
import { ExampleCenteringComponent } from './example/example-centering/example-centering.component';
import { ExampleSandboxComponent } from './example/example-sandbox/example-sandbox.component';

export const examples = [
    { path: 'example-centering', component: ExampleCenteringComponent },
    { path: 'example-blocks', component: ExampleBlocksComponent },
    { path: 'example-full-viewport', component: ExampleFullViewportComponent },
    { path: 'example-chessboard', component: ExampleChessboardComponent },
    { path: 'example-sandbox', component: ExampleSandboxComponent},
];