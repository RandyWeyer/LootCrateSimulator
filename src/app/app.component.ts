import { Component } from '@angular/core';
import { Player } from './models/player.model';
import { PlayerService } from './player.service';
import { Injectable } from '@angular/core';
import { LootCrate } from './models/lootcrate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService],
})
export class AppComponent
{
  constructor(private playerService: PlayerService){}
  masterCurrentPlayer: Player = new Player("LCS", "LCS", 1, 0, 1, 0, 1.5, 0, 1, []);
  activePlayer(clickedPlayer){
    this.masterCurrentPlayer = clickedPlayer;
    alert(this.masterCurrentPlayer);
    if(this.masterCurrentPlayer.level%10 === 0){

      console.log('Loot Crate Made!')
    }
  }
}
