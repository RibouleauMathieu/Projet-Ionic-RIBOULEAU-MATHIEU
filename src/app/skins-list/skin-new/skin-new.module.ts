import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinNewPageRoutingModule } from './skin-new-routing.module';

import { SkinNewPage } from './skin-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinNewPageRoutingModule
  ],
  declarations: [SkinNewPage]
})
export class SkinNewPageModule {}
