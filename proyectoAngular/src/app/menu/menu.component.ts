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
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Verificar si los parámetros de consulta han cambiado
      const currentParams = this.activatedRoute.snapshot.queryParams;
      const previousParams = this.activatedRoute.snapshot.queryParams;
      if (JSON.stringify(currentParams) !== JSON.stringify(previousParams)) {
        // Forzar la recarga del componente
        window.location.reload();
      }
    });
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
