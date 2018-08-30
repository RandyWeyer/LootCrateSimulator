import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { LootCrate } from '../models/lootcrate.model'
import { Player } from '../models/player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loot-crate',
  templateUrl: './loot-crate.component.html',
  styleUrls: ['./loot-crate.component.css'],
  providers: [PlayerService]
})

export class LootCrateComponent implements OnInit {

  private watchClick: boolean;
  shopLoot;
  currentActivePlayer;
  activePlayerId: string;
  currentPlayer;
  gameData;
  lootArray = [];
  lootCrates: FirebaseObjectObservable<any[]>;
  inventoryOpen: boolean = false;
  shopOpen: boolean = false;
  notEnoughGold: boolean = false;

  constructor(
  private playerService: PlayerService,
  private route: ActivatedRoute,
  private location: Location,
  private router: Router,
  private database: AngularFireDatabase)
  {
    this.gameData = database.list('player');
  }

  ngOnInit()
  {
      this.route.params.forEach((urlParameters) => {
        this.activePlayerId = urlParameters['id'];
      })
      this.currentActivePlayer = this.playerService.getPlayerById(this.activePlayerId);
      this.currentActivePlayer.subscribe(player => {
        this.playerService.setActivePlayer(player);
      })
      this.lootCrates = this.playerService.getLootCrates(this.activePlayerId);
  }

  homeClicked(activePlayer)
  {
    this.currentActivePlayer.subscribe( player =>{
      this.router.navigate(['home', player.$key]);
    })
  }

  shopClicked(buyAmount, price){
    var player;
    this.currentActivePlayer.subscribe(foundplayer => {
      player = foundplayer;
    })
    if(player.gold < buyAmount*price) {
      this.notEnoughGold = true;
    } else {
      this.notEnoughGold = false;
      this.lootArray = player.playerLoot;
      for(let i = 0; i < buyAmount; i ++){
        this.shopLoot = this.playerService.generateShopCrate();
        this.lootArray.push(this.shopLoot);
      }
      let playerGold = player.gold - buyAmount*price;
      var playerEntryInFireBase = this.playerService.getPlayerById(player.$key)
      playerEntryInFireBase.update({playerLoot: this.lootArray, gold: playerGold});
      // this.watchClick = true;
    }
  }

  openBox(currentLootCrate){
    var player;
    this.currentActivePlayer.subscribe(foundplayer => {
      player = foundplayer;
    })
    this.lootArray = player.playerLoot;
    var crateIndex = this.lootArray.length;
    this.lootArray.forEach( lootCrate => {
      if(currentLootCrate.attack === lootCrate.attack && currentLootCrate.idleAttack === lootCrate.idleAttack && currentLootCrate.critChance === lootCrate.critChance && currentLootCrate.criticalDamage === lootCrate.criticalDamage && currentLootCrate.goldRate === lootCrate.goldRate){
        crateIndex = this.lootArray.indexOf(lootCrate);
      }
    })
    if(crateIndex != this.lootArray.length){
      console.log(this.lootArray[crateIndex].attack)
      let newAttack = player.attack;
      let newIdleAttack = player.idleAttack;
      let newCritChance = player.critChance;
      let newCriticalDamage = player.criticalDamage;
      let newGoldRate = player.goldRate;

      if(this.lootArray[crateIndex].attack != null){
        newAttack = player.attack + this.lootArray[crateIndex].attack;
      }
      if(this.lootArray[crateIndex].idleAttack != null){
        newIdleAttack = player.idleAttack + this.lootArray[crateIndex].idleAttack;
      }
      if(this.lootArray[crateIndex].critChance != null){
        newCritChance = player.critChance + this.lootArray[crateIndex].critChance;
      }
      if(this.lootArray[crateIndex].criticalDamage != null){
        newCriticalDamage = player.criticalDamage + this.lootArray[crateIndex].criticalDamage;
      }
      if(this.lootArray[crateIndex].goldRate != null){
        newGoldRate = player.goldRate + this.lootArray[crateIndex].goldRate;
      }
      this.lootArray.splice(crateIndex, 1);

      var playerEntryInFireBase = this.playerService.getPlayerById(player.$key);
      playerEntryInFireBase.update({playerLoot: this.lootArray, attack: newAttack, idleAttack: newIdleAttack, critChance: newCritChance, criticalDamage: newCriticalDamage, goldRate: newGoldRate});
    }
  }
  toggleShop(){
    this.shopOpen = !this.shopOpen;
    this.inventoryOpen = false;
  }
  toggleInventory(){
    this.inventoryOpen = !this.inventoryOpen;
    this.shopOpen = false;
  }
  showLoot(currentLootCrate){

  }
  // cardStyle(currentCrate){
  //   if(currentCrate === 4){
  //     return "bg-success";
  //   }
  // }
}
