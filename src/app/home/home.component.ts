import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from './../player.model';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PlayerService]
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
          this.currentActivePlayer = player;
          this.playerService.setActivePlayer(player);
        }
      });
    })
  }

}
