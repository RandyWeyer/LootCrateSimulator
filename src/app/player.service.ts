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

  constructor(private database: AngularFireDatabase)
  {
    this.player = database.list('player');
  }
//   getPlayer()
//   {
//     return this.player;
//   }
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
  setBattlePlayer(battle)
  {
    this.battlePlayer = battle;
  }
  getBattlePlayer()
  {
    return this.battlePlayer;
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
    goldRate : player.goldRate
  });
}
generateLootCrate()
{
  this.generatedLootCrate = new lootCrate('', null, null, null, null, null, null);
  this.generatedLootCrate.toString()
  this.activePlayer.playerLoot.push(this.generatedLootCrate)
}
  // updateplayers(player: Player) {
  //   this.activePlayer.update(player.$key,
  //   {
  //     username : player.username,
  //     userpassword : player.userpassword,
  //     level : player.level,
  //     idleAttack : player.idleAttack,
  //     attack : player.attack,
  //     critChance : player.critChance,
  //     criticalDamage : player.criticalDamage,
  //     gold : player.gold,
  //     goldRate : player.goldRate
  //   });
  // }

  deleteplayers($key: string) {
    this.activePlayer.remove($key);
  }

}
