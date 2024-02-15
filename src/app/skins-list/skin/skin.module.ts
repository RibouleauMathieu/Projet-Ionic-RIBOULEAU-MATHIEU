import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinPageRoutingModule } from './skin-routing.module';

import { SkinPage } from './skin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinPageRoutingModule
  ],
  declarations: [SkinPage]
})
export class SkinPageModule {}
