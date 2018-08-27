import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BattleComponent } from './battle/battle.component';
import { LootCrateComponent } from './loot-crate/loot-crate.component';

const appRoutes: Routes =
[
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "battle",
        component: BattleComponent
    },
    {
      path: "lootBox",
      component: LootCrateComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
