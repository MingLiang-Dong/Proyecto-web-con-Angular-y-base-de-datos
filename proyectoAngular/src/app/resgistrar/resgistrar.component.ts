import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-resgistrar',
  templateUrl: './resgistrar.component.html',
  styleUrl: './resgistrar.component.css'
})
export class ResgistrarComponent {

  respuesta:any=null;
  usuario:any={
    user:null,
    password:null,
    suser:false
  }
  rusuario:any={
    user:null,
    password:null,
    rol:'user',
    email:null
  }

  constructor(private storageService: StorageService,private usuariosServicio:UsuariosService, private router:Router) { }
  ngOnInit(): void {
    this.storageService.setSessionStorage('usuario', this.usuario);
  }
  altaUsuario() {
    this.usuariosServicio.altaUsuario(this.rusuario).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          this.usuario.suser=true;
          this.storageService.setSessionStorage('usuario', this.usuario);
          this.router.navigate(['/Home']);
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }
  volver() {
    this.router.navigate(['/login']); 
  }
}
