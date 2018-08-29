import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { lootCrate } from './models/lootcrate.model'

@Injectable()
export class PlayerService
{
  player: FirebaseListObservable<any[]>;
  activePlayer;
  battlePlayer: FirebaseListObservable<any[]>;
  players: FirebaseListObservable<any[]>;
  generatedLootCrate;
  PlayerLootCrate;
  newPlayer;

  constructor(private database: AngularFireDatabase)
  {
    this.players = database.list('players');
  }
  
getPlayerById(playerId: string)
{
  return this.database.object('players/' + playerId);
}
  setActivePlayer(active)
  {
    this.activePlayer = active;
  }
  getActivePlayer()
  {
    return this.activePlayer;
  }
// }
getPlayers() {
  this.activePlayer = this.database.list('players');
  return this.activePlayer;
}


generateLootCrate()
{
  this.generatedLootCrate = new lootCrate('', null, null, null, null, null);
  this.PlayerLootCrate = this.generatedLootCrate;
  this.activePlayer.playerLoot.push(this.PlayerLootCrate);
  console.log('lootcrate made')
}
  insertPlayer(newPlayer) {
    {      
      this.players.push(newPlayer)
    };
  }
 
  deleteplayers($key: string) {
    this.activePlayer.remove($key);
  }
}
