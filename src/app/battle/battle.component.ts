import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Enemy } from '../enemy.model';
import { Router } from '@angular/router';
import { PlayerService } from './../player.service';
import { EnemyService } from './../enemy.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [PlayerService, EnemyService]
})
export class BattleComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {

  }
  // let newPlayer = new Player("randy", 3, 3, 3, 1, 3, 120, 1);
  // let newEnemy = new Enemy(5, 50);

  RunGame() {
    const startInterval = setInterval(() => {
      // 1000 -= 4;
    }, 100);
  }

}
