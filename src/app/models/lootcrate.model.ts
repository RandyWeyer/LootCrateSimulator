import { Player } from './player.model';

export class lootCrate {
  constructor(public name: string, public itemRarity: number, public idleAttack: number, public attack: number, public critChance: number, public criticalDamage: number, public gold: number) {
    this.itemRarity = Math.floor(Math.random() * 100) + 1
    let itemStat = Math.floor(Math.random() * 5) + 1
    if(this.itemRarity <= 10){
      this.name = 'Epic Lootcrate'
      if(itemStat == 1){
        this.idleAttack += 30;
      } else if(itemStat == 2){
      this.attack += 50
    }else if(itemStat == 3){
      this.critChance += .40
    }else if( itemStat == 4){
      this.criticalDamage += 100
    }else if( itemStat == 5){
      this.gold += 100
    }
    } else if(this.itemRarity <= 30){
      this.name = 'Rare Lootcrate'
      if(itemStat == 1){
      this.idleAttack += 30;
    }else if(itemStat == 2){
      this.attack += 40
    }else if(itemStat == 3){
      this.critChance += .25
    }else if(itemStat == 4){
      this.criticalDamage += 80
    }else if(itemStat == 5){
      this.gold += 60
    }
    } else if(this.itemRarity <= 60){
      this.name = 'Uncommon Lootcrate'
      if(itemStat == 1){
      this.idleAttack += 10;
    }else if(itemStat == 2){
      this.attack += 20
    }else if(itemStat == 3){
      this.critChance += .15
    }else if(itemStat == 4){
      this.criticalDamage += 40
    }else if(itemStat == 5){
      this.gold += 30
    }
    } else if(this.itemRarity <= 100){
      this.name = 'Common Lootcrate'
      if(itemStat == 1){
      this.idleAttack += 5;
      }else if(itemStat == 2){
      this.attack += 10
      }else if(itemStat == 3){
      this.critChance += .08
        }else if(itemStat == 4){
      this.criticalDamage += 20
      }else if(itemStat == 5){
      this.gold += 20
    }
    }
  }
}
