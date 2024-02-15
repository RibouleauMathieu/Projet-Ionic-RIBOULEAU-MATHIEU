import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SkinService } from 'src/app/skin.service';
import { Skin } from 'src/app/models/skin.model';

@Component({
  selector: 'app-skin-new',
  templateUrl: './skin-new.page.html',
  styleUrls: ['./skin-new.page.scss'],
})
export class SkinNewPage implements OnInit {
  public skin!: Skin;

  constructor(
    private Skin: SkinService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.skin = new Skin();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Skin enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/skins']);
      }, 2000);
    });
  }

  add() {
    this.Skin.saveNewSkin(this.skin).subscribe(() => {
      this.skin = new Skin();
      this.presentToast();
    });
  }
}
