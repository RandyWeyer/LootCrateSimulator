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
  generatedLootCrate;

  generateLootCrate() {
      this.generatedLootCrate = new lootCrate('', null, null, null, null, null, null)
      console.log(this.generatedLootCrate);
    }
  }
