import { ExampleBlocksComponent } from './example/example-blocks/example-blocks.component';
import { ExampleFullViewportComponent } from './example/example-full-viewport/example-full-viewport.component';
import { ExampleFormsComponent } from './example/example-forms/example-forms.component';
import { ExampleMediaObjectsComponent } from './example/example-media-objects/example-media-objects.component';
import { ExampleSpanningComponent } from './example/example-spanning/example-spanning.component';
import { ExampleChessboardComponent } from './example/example-chessboard/example-chessboard.component';
import { ExampleTransformComponent } from './example/example-transform/example-transform.component';
import { ExampleVideoViewerComponent } from './example/example-video-viewer/example-video-viewer.component';
import { ExampleCenteringComponent } from './example/example-centering/example-centering.component';

export const examples = [
    { path: 'example-centering', component: ExampleCenteringComponent },
    { path: 'example-blocks', component: ExampleBlocksComponent },
    { path: 'example-full-viewport', component: ExampleFullViewportComponent },
    { path: 'example-forms', component: ExampleFormsComponent },
    { path: 'example-media-objects', component: ExampleMediaObjectsComponent },
    { path: 'example-spanning', component: ExampleSpanningComponent },
    { path: 'example-chessboard', component: ExampleChessboardComponent },
    { path: 'example-transform', component: ExampleTransformComponent },
    { path: 'example-video-viewer', component: ExampleVideoViewerComponent },
];