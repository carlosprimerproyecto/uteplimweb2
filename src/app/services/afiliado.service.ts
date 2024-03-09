import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import Afiliado from '../interfaces/afiliado.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  constructor(private firestore: Firestore) { }

//metodo agregar
addAfiliado(afiliado: Afiliado){
  const afiliadoRef = collection(this.firestore, 'afiliado'); //acceder a las colecciones
  return addDoc(afiliadoRef, afiliado) //guarda el afiliado
  }
  
  //metodo traer
  getAfiliados(): Observable<Afiliado[]>{
    const afiliadoRef = collection(this.firestore,'afiliado'); //acceder a las colecciones
    return collectionData(afiliadoRef, { idField:'id' }) as Observable<Afiliado[]>;//traer
  }



}
