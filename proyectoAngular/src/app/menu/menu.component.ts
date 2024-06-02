import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { StorageService } from '../storage.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  categorias:any=null;

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private usuariosServicio:UsuariosService) { }
  ngOnInit(){
    this.vercategorias();
  }
  vercategorias() {
    this.usuariosServicio.vercategorias().subscribe(
      result => this.categorias = result
    );
  }
  navigate(valor:any) {
    this.router.navigate(['/categoria'], { queryParams: { data: valor } });
  }
  CerrarSesion(){
    this.router.navigate(['']);
  }
}
