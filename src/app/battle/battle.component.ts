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
  currentLevelEnemy;

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
    this.currentLevelEnemy= <Enemy>
    {
      name: this.currentEnemyName(),
      isBoss: this.enemyIsBoss(),
      defense: this.enemyDefense(),
      hitPoints: this.enemyHitPoints(),
      healthRegen: this.enemyHealthRegen(),
      sprite: this.enemySprite()
    }
  }
  enemySprite(){
    let sprites = ["Castle_armor_03", "Castle_giant_01", "Castle_minotaur_01", "Castle_queen_02", "Celestial_angel_07", "Celestial_angel_09", "Celestial_angel_10", "Celestial_angel_14", "Celestial_angel_15", "Celestial_bird_14", "Celestial_boss_03", "Celestial_cloud_03", "Celestial_dragon_10", "Celestial_horse_01", "Celestial_giant_04", "Celestial_slime_04", "Desert_djinn_01", "Desert_golem_05", "Desert_skeleton_01", "Desert_skeleton_02", "Desert_skeleton_03", "Desert_skeleton_06", "Desert_undead_01", "Forest_dragon_01", "Forest_tree_02", "Grasslands_fairy_05", "Grasslands_ogre_02", "Graveyard_aberration_14", "Graveyard_demon_16", "Graveyard_ghost_16", "Graveyard_ghost_15", "Graveyard_golem_09", "Graveyard_golem_10", "Graveyard_skeleton_12", "Graveyard_snake_07", "Graveyard_undead_09", "Graveyard_vampire_06", "Graveyard_vampire_07", "Mountain_bear_03", "Mountain_dragon_03", "Mountain_wyvern_02", "Snow_dragon_04", "Snow_golem_06", "Snow_mage_02", "Snow_skeleton_07", "Snow_undead_02", "Snow_undead_03", "Tropical_dragon_06", "Tropical_skeleton_08", "Underworld_boss_02", "Underworld_cat_06", "Underworld_chimera_03", "Underworld_demon_03", "Underworld_demon_07", "Underworld_demon_08", "Underworld_dragon_08", "Underworld_flayer_01", "Underworld_ghoul_06", "Underworld_reaper_01", "Underworld_spider_05", "VX Remix_robot_01", "VX Remix_robot_02", "VX Remix_robot_03", "VX Remix Statue_07"];

    return sprites[Math.floor(Math.random() * 66)];
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
