import { LootCrate } from './lootcrate.model'

export class Player
{
  constructor(public username = "", public userpassword = "", public level = 1, public idleAttack = 0, public attack = 1, public critChance = 1, public criticalDamage = 1.5, public gold = 10, public goldRate = 10, public playerLoot = [""], public isActive = false){
   }

}
