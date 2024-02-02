import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCardComponent],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    component.gameInfo = {
      id: '3',
      title: 'Game 2',
      thumbnail: 'thumbnail2.jpg',
      publisher: 'Publisher 2',
      freetogame_profile_url: 'profile_url2',
      genre: 'Genre 2'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
