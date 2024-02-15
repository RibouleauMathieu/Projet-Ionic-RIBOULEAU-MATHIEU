import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinsListPageRoutingModule } from './skins-list-routing.module';

import { SkinsListPage } from './skins-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinsListPageRoutingModule
  ],
  declarations: [SkinsListPage]
})
export class SkinsListPageModule {}
