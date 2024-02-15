import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skin } from './models/skin.model';

@Injectable({
  providedIn: 'root'
})
export class SkinService {
  private dbPath = '/skins';
  skinsRef: AngularFirestoreCollection<Skin>;


  constructor(
    private db: AngularFirestore
  ) { 
    this.skinsRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.skinsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewSkin(skin: Skin) : any {
    return new Observable(obs => {
      this.skinsRef.add({...skin}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.skinsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(skin:Skin) {
    return new Observable(obs => {
      this.skinsRef.doc(skin.id).update(skin);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`skins/${id}`).delete();
  }
}
