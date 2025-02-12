import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfiliadoService } from '../services/afiliado.service';
import { RouterModule } from '@angular/router';
import { NavegadorComponent } from "../navegador/navegador.component";

@Component({
    selector: 'app-nuevo-afiliado',
    standalone: true,
    templateUrl: './nuevo-afiliado.component.html',
    styleUrl: './nuevo-afiliado.component.css',
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        NavegadorComponent
    ]
})
export class NuevoAfiliadoComponent {

formulario: FormGroup;


constructor(private afiliadoService: AfiliadoService) {
  this.formulario = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    dni_cuil: new FormControl(),
    telefono: new FormControl(),
    domicilio: new FormControl(),
    localidad: new FormControl(),
    numero_afiliado: new FormControl(),
    razon_Social: new FormControl(),
    grupo_familiar: new FormControl(),
    img_salud: new FormControl(),
  });
}

ngOnInit(): void {} 

//se da cuando se rellena el formulario
async onSubmit(){
console.log(this.formulario.value); //ya tiene los valores es un objeto
const respuesta = await this.afiliadoService.addAfiliado(this.formulario.value); //guardamos la respuesta
console.log(respuesta); 
alert("se ha guardado correctamente") //alerta
this.formulario.reset(); // pone en blanco el formilario

}




}
