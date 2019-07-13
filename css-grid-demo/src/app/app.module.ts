import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ExampleComponent } from './example/example.component';
import { IntroComponent } from './intro/intro.component';
import { ExampleBlocksComponent } from './example/example-blocks/example-blocks.component';
import { ExampleFullViewportComponent } from './example/example-full-viewport/example-full-viewport.component';
import { ExampleFormsComponent } from './example/example-forms/example-forms.component';
import { ExampleMediaObjectsComponent } from './example/example-media-objects/example-media-objects.component';
import { ExampleSpanningComponent } from './example/example-spanning/example-spanning.component';
import { ExampleChessboardComponent } from './example/example-chessboard/example-chessboard.component';
import { ExampleTransformComponent } from './example/example-transform/example-transform.component';
import { ExampleVideoViewerComponent } from './example/example-video-viewer/example-video-viewer.component';



@NgModule({
  declarations: [

    AppComponent,
    MainMenuComponent,
    ExampleComponent,
    IntroComponent,
    ExampleBlocksComponent,
    ExampleFullViewportComponent,
    ExampleFormsComponent,
    ExampleMediaObjectsComponent,
    ExampleSpanningComponent,
    ExampleChessboardComponent,
    ExampleTransformComponent,
    ExampleVideoViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
