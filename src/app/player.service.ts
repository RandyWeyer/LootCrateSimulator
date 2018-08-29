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
  generatedShopCrate;
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

insert(player: Player) {
  this.activePlayer.push({
    username : player.username,
    userpassword : player.userpassword,
    level : player.level,
    idleAttack : player.idleAttack,
    attack : player.attack,
    critChance : player.critChance,
    criticalDamage : player.criticalDamage,
    gold : player.gold,
    goldRate : player.goldRate,
    playerLoot: player.playerLoot
  });
}
generateLootCrate(currentPlayer)
{
  this.generatedLootCrate = new lootCrate('', null, null, null, null, null, '');
  return this.activePlayer.playerLoot;
}
generateShopCrate()
{
  this.generatedShopCrate = new lootCrate('', null, null, null, null, null, '');
  return this.generatedShopCrate;
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
