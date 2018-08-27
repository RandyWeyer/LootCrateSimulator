import { Player } from './player.model';

export class lootCrate {
  constructor(public name: string, public itemRarity: number, public idleAttack: number, public attack: number, public critChance: number, public criticalDamage: number, public gold: number, public lootId: number) {
    function calculateParameters(){
      if(this.itemRarity <= 10){
        this.idleAttack += 10;
        this.attack
        this.critChance
        this.criticalDamag
        this.gold
      }
    }
  }
}
