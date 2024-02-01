import { Injectable } from '@angular/core';
import { HttpApiBase } from './base/HttpApiBase';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../constants/api.constants';
import { ApiBaseResponse } from '../../domain/model/structures/api.dto';
import { GameInformation } from '../../domain/model/structures/games/game.dto';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService extends HttpApiBase {

  constructor(http: HttpClient) {
    super(http);
  }

  public getGameDetailsById(id: string) {
    return this.get<ApiBaseResponse<GameInformation>>(`${BASE_URL}game?id=${id}`);
  }

  public getGamesByCategory(category: string): Observable<ApiBaseResponse<GameInformation[]>> {
    return this.get<ApiBaseResponse<GameInformation[]>>(`${BASE_URL}games?category=${category}`);
  }
}
