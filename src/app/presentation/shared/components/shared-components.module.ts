import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    GameCardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GameCardComponent,
    LoaderComponent
  ]
})
export class SharedComponentsModule { }
