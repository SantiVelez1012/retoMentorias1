import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GameCardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    GameCardComponent,
    LoaderComponent
  ]
})
export class SharedComponentsModule { }
