import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireModule) {
    this.players = database.list('players');
  }

  getPlayers(){
    return this.players;
  }
}
