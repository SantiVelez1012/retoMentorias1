import { Component, Input } from '@angular/core';
import { GameInformation } from '../../../../domain/model/structures/games/game.dto';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  @Input() gameInfo!: GameInformation;

  constructor() {}

}
