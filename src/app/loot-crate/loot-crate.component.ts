import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { lootCrate } from '../models/lootcrate.model'
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
  }

  homeClicked(activePlayer)
  {
    this.currentActivePlayer.subscribe( player =>{
      this.router.navigate(['home', player.$key]);
    })
  }

  shopClicked(){
    var player;
    this.currentActivePlayer.subscribe(foundplayer => {
      player = foundplayer;
    })
    this.lootArray = player.playerLoot;
     this.shopLoot = this.playerService.generateShopCrate();
     this.lootArray.push(this.shopLoot);
     var playerEntryInFireBase = this.playerService.getPlayerById(player.$key)
     playerEntryInFireBase.update({playerLoot: this.lootArray});
     // this.watchClick = true;
  }
}
