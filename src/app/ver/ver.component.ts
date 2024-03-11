import { Component} from '@angular/core';
import { AfiliadoService } from '../services/afiliado.service';
import Afiliado from '../interfaces/afiliado.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Firestore, deleteDoc, doc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
@Component
({
  selector: 'app-ver',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './ver.component.html',
  styleUrl: './ver.component.css'
})
export class VerComponent 
{

  afiliados: Afiliado[] = [];
  errorMessage: any;
  constructor(private afiliadoService: AfiliadoService, private firestore: Firestore, ) {
    

   }
  ngOnInit(): void {
    this.afiliadoService.getAfiliados().subscribe((afiliados) => {
      this.afiliados = afiliados;
    });
     }


  deleteAfiliado(id: string) {
    const afiliadoRef = doc(this.firestore, 'afiliado', id);
    return deleteDoc(afiliadoRef).catch((error) => {
      console.error(error);
      this.errorMessage = error.message;
    });
  }

  
}


