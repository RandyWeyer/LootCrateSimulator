import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { lootCrate } from '../models/lootcrate.model'
import { Router } from '@angular/router';
import { Player } from '../models/player.model';
import { PlayerService } from './../player.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PlayerService]
})
export class HomeComponent implements OnInit {

  currentActivePlayer: Player = null;
  currentRoute: string = this.router.url;
  
  constructor(private playerService: PlayerService, private router: Router) { }

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

  logOut() {
    this.currentActivePlayer = null;
  }
 
  startBattle(activePlayer)
  {
    console.log(activePlayer);
    this.router.navigate(['battle', activePlayer.$key]);
  }
  newPlayer ( inputNewName, inputNewPassword, level, idleAttack, attack, critChance, criticalDamage, gold, goldRate, playerLoot, isActive)
  {
    let userpassword = inputNewPassword;
    let username = inputNewName;
    let newPlayer: Player = new Player(username, userpassword, level, idleAttack, attack, critChance, criticalDamage, gold, goldRate, playerLoot, isActive);
    this.playerService.insertPlayer(newPlayer)
    this.currentActivePlayer = newPlayer;
          this.playerService.setActivePlayer(newPlayer);
  }
}
