import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ExampleComponent } from './example/example.component';
import { IntroComponent } from './intro/intro.component';
import { ResourcesComponent } from './resources/resources.component';

import { examples } from './examples';
import { ExampleDebuggingComponent } from './example/example-debugging/example-debugging.component';




@NgModule({
  declarations: [

    examples.map( example => example.component ),

    AppComponent,
    MainMenuComponent,
    ExampleComponent,
    IntroComponent,
    ResourcesComponent,
    ExampleDebuggingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
