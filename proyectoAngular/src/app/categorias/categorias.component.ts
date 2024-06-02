import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  
  libros:any=null;
  data: any;
  constructor(private route: ActivatedRoute,private router:Router ,private storageService: StorageService, private usuariosServicio:UsuariosService) { }
  ngOnInit(){
    this.validar();
    this.route.queryParams.subscribe(params => {
      this.data = params['data'];
    });
    this.verlibros(this.data);
  }
  verlibros(valor:any) {
      this.usuariosServicio.Clibros(valor).subscribe(
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
