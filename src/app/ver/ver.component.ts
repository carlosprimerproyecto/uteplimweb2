import { Component} from '@angular/core';
import { AfiliadoService } from '../services/afiliado.service';
import Afiliado from '../interfaces/afiliado.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Firestore, deleteDoc, doc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { NavegadorComponent } from "../navegador/navegador.component";
@Component
({
    selector: 'app-ver',
    standalone: true,
    templateUrl: './ver.component.html',
    styleUrl: './ver.component.css',
    imports: [CommonModule, RouterModule, FormsModule, NavegadorComponent]
})
export class VerComponent 
{

  afiliados: Afiliado[] = [];
  errorMessage: any;
selectdId: string | null = null;

  constructor(private readonly afiliadoService: AfiliadoService, private firestore: Firestore, private router: Router) {
   

   }
  ngOnInit(): void {
    this.afiliadoService.getAfiliados().subscribe((afiliados) => {
      this.afiliados = afiliados;
    });
     }


  

onVerClick(id: string){
  this.selectdId = id;
  console.log(this.selectdId);
  this.router.navigate(['detalle', id]);
}


}


