import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { FeedComponent } from './feed.component';
import { GamesApiService } from '../../../../data/api/games.api.service';
import { GameInformation } from '../../../../domain/model/structures/games/game.dto';
import { ApiBaseResponse } from '../../../../domain/model/structures/api.dto';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let gamesApiService: GamesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedComponent],
      imports: [HttpClientTestingModule],
      providers: [GamesApiService]
    });
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    gamesApiService = TestBed.inject(GamesApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getGames on ngOnInit', () => {
    spyOn(component, 'getGames');
    component.ngOnInit();
    expect(component.getGames).toHaveBeenCalled();
  });

});