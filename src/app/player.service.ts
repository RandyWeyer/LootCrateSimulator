import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService
{
  players: FirebaseListObservable<any[]>;
  activePlayer: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase)
  {
    this.players = database.list('players');
  }
  getPlayers()
  {
    return this.players;
  }
  setActivePlayer(active)
  {
    this.activePlayer = active;
  }
}
