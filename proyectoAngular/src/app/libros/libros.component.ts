import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

  respuesta:any=null;
  libros:any=null;

  constructor(private usuariosServicio:UsuariosService) { }
  ngOnInit(){
    this.verlibros();
  }
  verlibros() {
  
      this.usuariosServicio.verlibros().subscribe(
        result => this.libros = result
      );
    
  }
  hayRegistros() {
    if(this.libros == null) {
      return false;
    } else {
      return true;
    }
  }
}
