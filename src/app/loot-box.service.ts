import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireDatabaseModule,FirebaseListObservable } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { lootCrate } from './models/lootcrate.model';
import { Player } from './models/player.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { LootCrateComponent } from './loot-crate/loot-crate.component';

@Injectable()
export class LootBoxService {
lootcrates: FirebaseListObservable<any[]>;

constructor(private name: lootCrate, private itemRarity: lootCrate, private lootId: lootCrate, private level: Player) {}

  // public lootCratel;

  // generateLootCrate() {
  // var lootCrate = new lootCrate('testname', this.itemRarity, this.lootId)
  //   lootCrate.itemRarity = Math.floor(Math.random()*5);
  //   }
  }
