import { Injectable } from '@angular/core';
import { Casas } from '../domain/casas';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})



export class CasaServiceService {
 
  
  private productsCollection: AngularFirestoreCollection<Casas>
  
  casas: any
  
  constructor(private afs: AngularFirestore) { 
    this.productsCollection=afs.collection<Casas>('casas');
  }


  getCasasFire(){
    return this.productsCollection.valueChanges();
  }
}
