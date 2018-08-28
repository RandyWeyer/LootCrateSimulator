import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService
{
  player: FirebaseListObservable<any[]>;
  activePlayer: FirebaseListObservable<any[]>;
  constructor(private firebase: AngularFireDatabase) { }
  battlePlayer: FirebaseListObservable<any[]>;
  // constructor(private database: AngularFireDatabase)
  // {
  //   this.player = database.list('player');
  // }
//   getPlayer()
//   {
//     return this.player;
//   }
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
  this.activePlayer = this.firebase.list('players');
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
  updateplayers(player: Player) {
    this.activePlayer.update(player.$key,
    {
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

  deleteplayers($key: string) {
    this.activePlayer.remove($key);
  }

}