import { Component, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { AngularFireDatabaseModule } from 'angularfire2/database'
// import { AngularFireModule } from 'angularfire2';
import { LootBoxService } from '../loot-box.service';
// import { lootCrate } from '../models/lootcrate.model'
// import { Router } from '@angular/router';
import { Player } from '../models/player.model';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PlayerService, LootBoxService]
})
export class HomeComponent implements OnInit {
  currentActivePlayer: Player = null;

  constructor(private playerService: PlayerService) { }

  ngOnInit()
  {

  }
  logIn(userName: string, userPassword: string)
  {
    let playerList = this.playerService.getPlayers();
    playerList.subscribe(players => {
      players.forEach(player => {
        if(userName === player.username && userPassword === player.userpassword)
        {
          this.playerService.updatePlayerActive(player);
          this.currentActivePlayer = player;
          this.playerService.setActivePlayer(player);
        }
      });
    })
  }

}
