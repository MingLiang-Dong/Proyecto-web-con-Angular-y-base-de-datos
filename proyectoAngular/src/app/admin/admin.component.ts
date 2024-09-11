import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service'; 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  libros:any=null;
  respuesta:any=null;
  libro:any = {
    id_libro:null,
    id_categoria:null,
    n_libro:null,
    descripcion:null,
    imagen:null,
    stock:null,
    precio:null
  }
  alibro:boolean=false;


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
  Alibro(){
    this.alibro=true;
  }
  
  altaLibro() {
    this.usuariosServicio.altaLibro(this.libro).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          alert(this.respuesta['mensaje']);
          this.verlibros();
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }

  seleccionarLibro(id_libro:any){
    this.Alibro();
    this.usuariosServicio.seleccionarLibro(id_libro).subscribe(
      (datos:any) => {
        this.libro = datos[0]
  }
);
  }

  actualizarLibro() {
    this.usuariosServicio.actualizarLibro(this.libro).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          alert(this.respuesta['mensaje']);
          this.verlibros();
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }

  eliminarLibro(id_libro:number) {
    this.usuariosServicio.eliminarLibro(id_libro).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          alert(this.respuesta['mensaje']);
          this.verlibros();
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
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
    const storedUser = this.storageService.getSessionStorage('admin');
    if(storedUser==false){
      this.router.navigate(['']);
    }
    return storedUser;
  }

CerrarSesion(){
  this.router.navigate(['']);
}
}