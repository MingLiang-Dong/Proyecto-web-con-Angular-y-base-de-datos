import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//aol

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = "http://localhost/proyecto/basedatos/"

  constructor(private http: HttpClient) { }

  verlibros() {
    return this.http.get(`${this.URL}Verlibros.php`);
  }
  validarUsuario(usuario:any) {
    return this.http.post(`${this.URL}validarUsuario.php`,JSON.stringify(usuario));
  }

  altaUsuario(rusuario:any) {
    return this.http.post(`${this.URL}AltaUsuario.php`, JSON.stringify(rusuario));
  }

  bajaUsuario(idUsuario: number) {
    return this.http.get(`${this.URL}BajaUsuario.php?idUsuario=${idUsuario}`);
  }
  
  seleccionarUsuario(idUsuario: number) {
    return this.http.get(`${this.URL}SeleccionarUsuario.php?idUsuario=${idUsuario}`);
  }

  editarUsuario(usuario:any) {
    return this.http.post(`${this.URL}EditarUsuario.php`, JSON.stringify(usuario));
  }
}
