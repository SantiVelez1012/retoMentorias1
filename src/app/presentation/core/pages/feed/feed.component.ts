import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../../../../data/api/games.api.service';
import { GameInformation } from '../../../../domain/model/structures/games/game.dto';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {

  constructor(private gamesApiService: GamesApiService) { }

  shooterGames: GameInformation[] = [];
  mmorpgGames: GameInformation[] = [];
  pvpGames: GameInformation[] = [];

  ngOnInit(): void {
    this.getGames();
  }
  
  getGames(){
    this.gamesApiService.getGamesByCategory('shooter').subscribe((response: any) => {
      response = response.slice(0, 4);
      this.shooterGames = response;
    });


    this.gamesApiService.getGamesByCategory('mmorpg').subscribe((response: any) => {
      response = response.slice(0, 4);
      this.mmorpgGames = response;
    });

    this.gamesApiService.getGamesByCategory('pvp').subscribe((response: any) => {
      response = response.slice(0, 4);
      this.pvpGames = response;
    });
  }

}
