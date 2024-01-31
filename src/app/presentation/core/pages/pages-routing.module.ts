import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: PagesComponent,
    children: [
      { path: 'feed', component: FeedComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }