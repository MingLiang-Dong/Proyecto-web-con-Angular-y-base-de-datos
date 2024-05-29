import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  libros:any=null;
  respuesta:any=null;
  libro:any = {
    id_categoria:null,
    id_libro:null,
    n_libro:null,
    descripcion:null,
    imagen:null,
    stock:null,
    precio:null
  }

  constructor(private usuariosServicio:UsuariosService, private router:Router) { }

  altaLibro() {
    this.usuariosServicio.altaLibro(this.libro).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          this.router.navigate(['/Home']);
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }

  actualizarLibro() {
    this.usuariosServicio.actualizarLibro(this.libro).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          this.router.navigate(['/Home']);
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }

  eliminarLibro() {
    this.usuariosServicio.eliminarLibro(this.libro).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          this.router.navigate(['/Home']);
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }
}
