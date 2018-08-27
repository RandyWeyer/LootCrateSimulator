import { Component } from '@angular/core';
import { Player } from './player.model';
import { PlayerService } from './player.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent
{
  masterCurrentPlayer: Player = new Player("LCS", "LCS", 1, 0, 1, 0, 1.5, 0);


}
