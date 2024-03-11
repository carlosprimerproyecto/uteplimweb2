import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bandeja-principal',
  standalone: true,
  imports: [
   
  ],
  templateUrl: './bandeja-principal.component.html',
  styleUrl: './bandeja-principal.component.css'
})
export class BandejaPrincipalComponent {

  constructor(private userService: UserService, private router: Router) { }

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
   

  onClick(){
    this.userService.logout()
    this.router.navigate(['/ingreso'])
  }

}
