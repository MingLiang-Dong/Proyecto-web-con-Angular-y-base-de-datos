import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title ='proyectoAngular'
  usuarios:any = null;
  respuesta:any=null;

  usuario:any = {
    user:null,
    password:null,
    rol:null,
    email:null
  }

  constructor(private usuariosServicio:UsuariosService) { }

  ngOnInit(){
    
  }
  
  altaUsuario() {
    this.usuariosServicio.altaUsuario(this.usuario).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }


  hayRegistros() {
    if(this.usuarios == null) {
      return false;
    } else {
      return true;
    }
  }
}
