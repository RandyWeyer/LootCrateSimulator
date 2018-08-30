import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
  currentPlayer;
  percentHealth;
  currentLevel: number = 1;
  backgroundImage;

  constructor
  (
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private playerService: PlayerService,
    private database: AngularFireDatabase
  ) { }

  ngOnInit()
  {
    this.route.params.forEach((urlParameters) => {
      this.activePlayerId = urlParameters['id'];
    })
    this.currentActivePlayer = this.playerService.getPlayerById(this.activePlayerId);

    this.currentActivePlayer.subscribe(player => {
      this.currentLevelEnemy= <Enemy>
      {
        name: this.currentEnemyName(player),
        isBoss: this.enemyIsBoss(player),
        defense: this.enemyDefense(player),
        hitPoints: this.enemyHitPoints(player),
        healthRegen: this.enemyHealthRegen(player),
        sprite: this.enemySprite()
      }
    })
    this.percentHealth = 100;
    this.idleClickDamage();
    this.bossRegen();


  }
  enemySprite(){
    let sprites = ["Castle_armour_03", "Castle_giant_01", "Castle_minotaur_01", "Castle_queen_02", "Celestial_angel_07", "Celestial_angel_09", "Celestial_angel_10", "Celestial_angel_14", "Celestial_angel_15", "Celestial_bird_14", "Celestial_boss_03", "Celestial_cloud_03", "Celestial_dragon_10", "Celestial_horse_01", "Celestial_giant_04", "Celestial_slime_04", "Desert_djinn_01", "Desert_golem_05", "Desert_skeleton_01", "Desert_skeleton_02", "Desert_skeleton_03", "Desert_skeleton_06", "Desert_undead_01", "Forest_dragon_01", "Forest_tree_02", "Grasslands_fairy_05", "Grasslands_ogre_02", "Graveyard_aberration_14", "Graveyard_demon_16", "Graveyard_ghost_16", "Graveyard_ghost_15", "Graveyard_golem_09", "Graveyard_golem_10", "Graveyard_skeleton_12", "Graveyard_snake_07", "Graveyard_undead_09", "Graveyard_vampire_06", "Graveyard_vampire_07", "Mountain_bear_03", "Mountain_dragon_03", "Mountain_wyvern_02", "Snow_dragon_04", "Snow_golem_06", "Snow_mage_02", "Snow_skeleton_07", "Snow_undead_02", "Snow_undead_03", "Tropical_dragon_06", "Tropical_skeleton_08", "Underworld_boss_02", "Underworld_cat_06", "Underworld_chimera_03", "Underworld_demon_03", "Underworld_demon_07", "Underworld_demon_08", "Underworld_dragon_08", "Underworld_flayer_01", "Underworld_ghoul_06", "Underworld_reaper_01a", "Underworld_spider_05", "VX_Remix_robot_01", "VX_Remix_robot_02", "VX_Remix_robot_03", "VX_Remix_statue_07"];

    return "../assets/Enemies/" + sprites[Math.floor(Math.random() * 64)] + ".png";
  }
  currentEnemyName(currentPlayer) {
    let enemyNameArray = ["Frodo", "Heidegger", "Snider", "Thundacheese", "Deviant", "Typical", "Normie", "Thrash-Ram", "Hambone", "Goat-Faced Killah", "Magma", "Miscreant", "Peculiar", "Passive", "Impure", "Parvo-Dog", "Global Planetary Analysis Golem", "Preliminary Piloting Android", "Unified Shepherd Cyborg", "General Travel Golem", "Communist", "Electronic Lifeform Detection Technician", "Extraterrestial Personal Protection Bot", "Sensitive Operating Emulator", "Neohuman Emergency Response Juggernaut", "Digital Processor Juggernaut", "Poodle", "Mother-in-Law", "Breakdancer", "Prude", "Creeper", "Worm", "Dragon-kin", "Eddie Munster", "Bruiser", "Inferno", "Swine", "Freak", "Slagpaw", "Germwings", "Weirdo", "Dweller", "Bulge", "Serpent", "Barbgirl", "Malformation", "Mournface", "Lich", "Skeleton"];
    let bossName = ["Super", "Mega", "Ultra", "Milky", "Amorphous", "Sexy", "Uncomfortable","Uber", "Hyper", "Master", "Godly", "Massive", "Deadly", "Mechanized", "Strange", "Sweaty", "Pluralized", "Huge", "Sneaky", "Lethargic", "Devious", "Nackered", "Outrageous", "Stupendous", "Extreme", "Impressive", "Merciless", "Putrid", "Grisly", "Dire", "Titanic", "Poisonous", "Evil", "Mad", "Angry", "Tireless", "Acidic", "Savage", "Shady", "Fetid", "Vile", "Eternal", "Golden", "Blood-eyed"];
    let enemyNameIndex = Math.floor(Math.random() * 48);
    let bossIndex = Math.floor(Math.random() * 40);
    if(this.enemyIsBoss(currentPlayer)){
      return bossName[bossIndex] + " " + enemyNameArray[enemyNameIndex];
    } else {
      return enemyNameArray[enemyNameIndex];
    }
  }
  hitpointsPercent(currentPlayer)
  {
    console.log((currentPlayer.hitPoints/this.enemyHitPoints(currentPlayer))*100);
    return ((currentPlayer.hitPoints/this.enemyHitPoints(currentPlayer))*100);
  }

  enemyIsBoss(currentPlayer: Player) {
      if(currentPlayer.level % 10 === 0){
        return true;
      } else {
        return false;
      }
    }

  enemyDefense(currentPlayer) {
      return Math.floor(currentPlayer.level/5);
  }
  enemyHitPoints(currentPlayer) {
    let hitPoints = 50 + (Math.pow(10, (Math.floor(currentPlayer.level/10))));
    if(this.enemyIsBoss(currentPlayer)){
      hitPoints*=5;
    }
    return hitPoints;
  }
  enemyHealthRegen(currentPlayer){
    let healthRegen = Math.floor(this.enemyHitPoints(currentPlayer) / 200);
    if(this.enemyIsBoss(currentPlayer)){
      return healthRegen;
    } else {
      return 0;
    }
  }

  findPlayer(playerToFind) {
    this.currentActivePlayer.subscribe( foundplayer => {
      playerToFind = foundplayer;
    })
  }
  clickDamage() {
    // this.currentLevelEnemy.hitPoints = this.currentLevelEnemy.hitPoints - 1;
    var player;
    this.currentActivePlayer.subscribe( foundplayer => {
      player = foundplayer;
    })
    let critMultiply = 1;
    if(Math.floor(Math.random()*101) < player.critChance) {
      critMultiply = player.criticalDamage;
    }
    if(Math.ceil(this.currentLevelEnemy.hitPoints) > 0){
      if(player.attack > this.currentLevelEnemy.defense){
        this.currentLevelEnemy.hitPoints = this.currentLevelEnemy.hitPoints - (player.attack - this.currentLevelEnemy.defense) * critMultiply;
      } else if(player.attack <= this.currentLevelEnemy.defense){
        this.currentLevelEnemy.hitPoints = this.currentLevelEnemy.hitPoints - 1;
      }
      if(this.currentLevelEnemy.hitPoints <=0){
        this.percentHealth = 0;
      } else {
        this.percentHealth = Math.floor(this.currentLevelEnemy.hitPoints*100/this.enemyHitPoints(player));
      }
    }
    if(Math.ceil(this.currentLevelEnemy.hitPoints) <= 0) {
      player.level = player.level + 1;
      this.endRound(player);
    }
    // console.log(player.attack);
    }

  endRound(localUpdatedPlayer){
    var player;
    this.currentActivePlayer.subscribe( foundplayer => {
      player = foundplayer;
    })
      var playerEntryInFirebase = this.playerService.getPlayerById(localUpdatedPlayer.$key);
      playerEntryInFirebase.update({level: localUpdatedPlayer.level, gold: this.goldReceived(player)});
      this.router.navigate(['battle', player.$key]);
  }

  idleClickDamage() {

    this.currentActivePlayer.subscribe( player => {
      const startInterval = setInterval(() => {
        if(Math.ceil(this.currentLevelEnemy.hitPoints) > 0){
          if(player.idleAttack > this.currentLevelEnemy.defense){
            this.currentLevelEnemy.hitPoints = this.currentLevelEnemy.hitPoints - (player.idleAttack - this.currentLevelEnemy.defense);
          } else if(player.idleAttack <= this.currentLevelEnemy.defense){
            this.currentLevelEnemy.hitPoints = this.currentLevelEnemy.hitPoints - 1;
          }
          if(this.currentLevelEnemy.hitPoints <=0){
            this.percentHealth = 0;
          } else {
            this.percentHealth = Math.floor(this.currentLevelEnemy.hitPoints*100/this.enemyHitPoints(player));
          }
        }
        if(Math.ceil(this.currentLevelEnemy.hitPoints) <= 0) {
          // player.level = player.level + 1;
          // this.endRound(player);
          clearInterval(startInterval);
        }
      }, 1000);
    })
  }
  bossRegen() {

    this.currentActivePlayer.subscribe( player => {
      if(this.enemyIsBoss(player)){
        const startInterval = setInterval(() => {
          if(Math.ceil(this.currentLevelEnemy.hitPoints) > 0 && this.enemyHitPoints(player)-this.currentLevelEnemy.healthRegen >= Math.ceil(this.currentLevelEnemy.hitPoints)){
            this.currentLevelEnemy.hitPoints = this.currentLevelEnemy.hitPoints + this.currentLevelEnemy.healthRegen;
            if(this.currentLevelEnemy.hitPoints <=0){
              this.percentHealth = 0;
            } else {
              this.percentHealth = Math.floor(this.currentLevelEnemy.hitPoints*100/this.enemyHitPoints(player));
            }
          }
          if(Math.ceil(this.currentLevelEnemy.hitPoints) <= 0) {
            clearInterval(startInterval);
          }
        }, 1000);
      }
    })
  }
  goldReceived(currentPlayer){
    let addedGold = 10 + (Math.pow(5, (Math.floor(currentPlayer.level/10))));
    if(this.enemyIsBoss(currentPlayer)){
      addedGold*=10;
    }
    return currentPlayer.gold + addedGold;
  }
  enemyEntry(){
    if(this.currentLevelEnemy.hitPoints <= 20 ){
      return "";
    } else {
      return "animated slideInLeft";
    }
  }
  setBackground(){
    ["auberge1", "auberge2", "autel", "camp", "cave", "caverne", "champ", "chateau1", "chateau2", "crypte", "desert", "eglise", "eglise1", "etang", "ferme", "foret", "foret1", "foret2", "foret3", "foret11", "foret21", "foret31", "grotte", "jardins", "lisiere", "manoir", "mine", "mine1", "mine2", "moulin", "moulin1", "moulin2", "oasis1", "oasis2", "oasis3", "pyramide", "route", "ruines", "sentier1", "sentier2", "souterrain", "souterrains", "temple1", "temple2", "tresor", "trone", "ville", "volcan"]
  }
  backHome(){
    this.currentActivePlayer.subscribe( player =>{
      this.router.navigate(['home', player.$key]);
    })
  }
  confirmToBuy(){
    if(confirm("Are you sure you want to go buy? Your level will reset to 1.")){
      this.resetToBuy();
    };
  }
  resetToBuy(){
    var player;
    this.currentActivePlayer.subscribe( foundplayer => {
      player = foundplayer;
    })
      var playerEntryInFirebase = this.playerService.getPlayerById(player.$key);
      playerEntryInFirebase.update({level: 0});
      this.router.navigate(['lootBox', player.$key]);
  }
}
