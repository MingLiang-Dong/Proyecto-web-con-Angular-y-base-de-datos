import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

  respuesta:any=null;
  libros:any=null;

  constructor(private storageService: StorageService,private usuariosServicio:UsuariosService, private router:Router) { }
  ngOnInit(){
    this.validar();
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
  
  validar() {
    const storedUser = this.storageService.getSessionStorage('usuario');
    if(storedUser.suser==false){
      this.router.navigate(['']);
    }
    return storedUser.suser;
  }
}
