import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailsComponent } from './game-details/game-details.component';



@NgModule({
  declarations: [
    FeedComponent,
    PagesComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
