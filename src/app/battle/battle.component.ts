import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../models/player.model';
import { Enemy } from '../models/enemy.model';

import { PlayerService } from '../player.service';
import { EnemyService } from '../enemy.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [PlayerService, EnemyService]
})
export class BattleComponent implements OnInit {
  // players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {

  }
  let testPlayer = new Player("randy", 3, 3, 3, 1, 3, 120, 1);
  let testEnemy = new Enemy("colin", false, 1, 100, 1);

  ClickDamage(newPlayer: Player, newEnemy: Enemy) {
    let rand = new Random();
    let critMultiply = 1;
    if(rand.Next(0, 101) > newPlayer.critChance) {
      critMultiply = newPlayer.criticalDamage;
    }
    if(newPlayer.attack > newEnemy.defense){
      enemy.hitpoints -= (newPlayer.attack - newEnemy.defense) * critMultiply;
    } else if(newPlayer.attack <= newEnemy.defense){
      enemy.hitpoints -= 1;
    }

  }
  // RunGame() {
  //   const startInterval = setInterval(() => {
  //
  //   }, 1000);
  // }

}
