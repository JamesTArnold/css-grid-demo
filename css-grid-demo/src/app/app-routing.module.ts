import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { ResourcesComponent } from './resources/resources.component';
import { IntroComponent } from './intro/intro.component';

import { examples } from './examples';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'menu', component: MainMenuComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'intro', component: IntroComponent},
  ...examples,
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
