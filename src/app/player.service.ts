import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService
{
  players: FirebaseListObservable<any[]>;
  activePlayer: Player;

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
  GetActivePlayer(){
    return this.activePlayer;
  }
  getPlayerById(playerId: string){
    return this.database.object('/players/' + playerId);
  }

  updatePlayerActive(localUpdatedPlayer){
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({isActive: localUpdatedPlayer.isActive = true});
  }
  // insert(player: Player) {
  //   this.activePlayer.push({
  //     username : player.username,
  //     userpassword : player.userpassword,
  //     level : player.level,
  //     idleAttack : player.idleAttack,
  //     attack : player.attack,
  //     critChance : player.critChance,
  //     criticalDamage : player.criticalDamage,
  //     gold : player.gold,
  //     goldRate : player.goldRate,
  //     isActive : player.isActive
  //   });
  // }
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
  //     goldRate : player.goldRate,
  //     isActive : player.isActive
  //   });
  // }
  // deleteplayers($key: string) {
  //   this.activePlayer.remove($key);
  // }
}
