import { Component, OnInit } from '@angular/core';
import { Skin } from '../models/skin.model';
import { SkinService } from '../skin.service';

@Component({
  selector: 'app-skins-list',
  templateUrl: './skins-list.page.html',
  styleUrls: ['./skins-list.page.scss'],
})
export class SkinsListPage implements OnInit {
  skins!: Array<Skin>;

  constructor(
    private Skin: SkinService
  ) { }

  ngOnInit() {
    this.Skin.getAll().subscribe((data: any) => {
      this.skins = data;
    });
  }

}
