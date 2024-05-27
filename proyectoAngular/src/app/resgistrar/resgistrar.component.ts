import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-resgistrar',
  templateUrl: './resgistrar.component.html',
  styleUrl: './resgistrar.component.css'
})
export class ResgistrarComponent {

  respuesta:any=null;
  rusuario:any={
    user:null,
    password:null,
    rol:'user',
    email:null
  }

  constructor(private usuariosServicio:UsuariosService) { }
  
  altaUsuario() {
    this.usuariosServicio.altaUsuario(this.rusuario).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          alert(this.respuesta['mensaje']);
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }
}
