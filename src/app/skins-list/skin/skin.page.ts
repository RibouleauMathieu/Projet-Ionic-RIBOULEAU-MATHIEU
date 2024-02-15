import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { SkinService } from 'src/app/skin.service';
import { Skin } from 'src/app/models/skin.model';

@Component({
  selector: 'app-skin',
  templateUrl: './skin.page.html',
  styleUrls: ['./skin.page.scss'],
})
export class SkinPage implements OnInit {
  modif: boolean = false;
  skin!: Skin;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Skin: SkinService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Skin.get(id).subscribe((value: any) => {
      this.skin = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header : 'Etes vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Configurer',
            handler: () => {this.modif = !this.modif}
          }
        ]
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Skin.update(this.skin).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Skin.delete(id);
    this.router.navigate(['/skins']);
  }
}
