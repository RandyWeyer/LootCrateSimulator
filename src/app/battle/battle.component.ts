import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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
  currentActivePlayer;
  activePlayerId: string;

  constructor
  (
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit()
  {
    this.route.params.forEach((urlParameters) => {
      this.activePlayerId = urlParameters['id'];
    })
    this.currentActivePlayer = this.playerService.getPlayerById(this.activePlayerId);
    console.log(this.currentActivePlayer);
  }

  currentEnemyName() {
    let enemyNameArray = ["Frodo", "Heidegger", "Snider", "Thundacheese", "Deviant", "Typical", "Normie", "Thrash-Ram", "Hambone", "Goat-Faced Killah", "Magma", "Miscreant", "Peculiar", "Passive", "Impure", "Parvo-Dog", "Global Planetary Analysis Golem", "Preliminary Piloting Android", "Unified Shepherd Cyborg", "General Travel Golem", "Communist", "Electronic Lifeform Detection Technician", "Extraterrestial Personal Protection Bot", "Sensitive Operating Emulator", "Neohuman Emergency Response Juggernaut", "Digital Processor Juggernaut"];
    let bossName = ["Super", "Mega", "Ultra", "Milky", "Amorphous", "Sexy", "Uncomfortable","Uber", "Hyper", "Master", "Godly", "Massive", "Deadly", "Mechanized", "Strange", "Sweaty", "Pluralized", "Huge"];
    let enemyNameIndex = Math.floor(Math.random() * 25);
    let bossIndex = Math.floor(Math.random() * 15);
    if(this.enemyIsBoss()){
      return bossName[bossIndex] + " " + enemyNameArray[enemyNameIndex];
    } else {
      return enemyNameArray[enemyNameIndex];
    }
  }
  enemyIsBoss() {
    if(this.currentActivePlayer.level % 10 === 0){
      return true;
    } else {
      return false;
    }
  }

  enemyDefense() {
    return Math.floor(this.currentActivePlayer.level/5);
  }
  enemyHitPoints() {
    let hitPoints = 50 + (Math.pow(10, (Math.floor(this.currentActivePlayer.level/10))));
    if(this.enemyIsBoss()){
      hitPoints*=10;
    }
    return hitPoints;
  }
  enemyHealthRegen(){
    let healthRegen = Math.floor(this.enemyHitPoints() / 100);
    if(this.enemyIsBoss()){
      return healthRegen;
    } else {
      return 0;
    }
  }
  currentLevelEnemy: Enemy = <Enemy>
  {
    name: this.currentEnemyName(),
    isBoss: this.enemyIsBoss(),
    defense: this.enemyDefense(),
    hitPoints: this.enemyHitPoints(),
    healthRegen: this.enemyHealthRegen()
  }


  // let currentLevelEnemy = new Enemy()


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
