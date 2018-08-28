import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../models/player.model';
import { Enemy } from '../models/enemy.model';

import { PlayerService } from './../player.service';
import { EnemyService } from '../enemy.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [PlayerService, EnemyService]
})
export class BattleComponent implements OnInit {

  activePlayer: Player[];
  constructor(private router: Router, private playerService: PlayerService) { }
  currentActivePlayer;

  ngOnInit() {
    let playerList = this.playerService.getPlayers();
    playerList.subscribe(players => {
      players.forEach(player => {
        if(player.isActive === true)
        {
          this.currentActivePlayer = player;
          this.playerService.setActivePlayer(player);
        }
      });
    })
  }

  CurrentEnemyName() {
    let enemyNameArray = ["Frodo", "Heidegger", "Snider", "Thundacheese", "Deviant", "Typical", "Normie"];
    let enemyNameIndex = Math.floor(Math.random() * 7);
    return enemyNameArray[enemyNameIndex];
  }
  enemyIsBoss() {
    if(this.currentActivePlayer.level % 10 === 0){
      return true;
    } else {
      return false;
    }
  }

  let currentLevelEnemy = new Enemy()

  // let testPlayer = new Player("randy", 3, 3, 3, 1, 3, 120, 1);
  // let testEnemy = new Enemy("colin", false, 1, 100, 1);
  // getRandomInt(max) {
  //   return Math.floor(Math.random()*Math.floor(max));
  // }
  //
  // ClickDamage(newPlayer: Player, newEnemy: Enemy) {
  //   let critMultiply = 1;
  //   if(this.getRandomInt(101) < newPlayer.critChance) {
  //     critMultiply = newPlayer.criticalDamage;
  //   }
  //   if(newPlayer.attack > newEnemy.defense){
  //     newEnemy.hitPoints -= (newPlayer.attack - newEnemy.defense) * critMultiply;
  //   } else if(newPlayer.attack <= newEnemy.defense){
  //     newEnemy.hitPoints -= 1;
  //   }
  // }


  // RunGame() {
  //   const startInterval = setInterval(() => {
  //
  //   }, 1000);
  // }

}
