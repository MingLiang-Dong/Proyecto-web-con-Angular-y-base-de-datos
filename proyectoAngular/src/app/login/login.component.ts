import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../services/loginRequest';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginError: string = "";
  respuesta:any=null;
  usuario:any={
    user:null,
    password:null
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private usuariosServicio:UsuariosService) {

  }
  ngOnInit(): void {

  }
  get email() {
    return this.loginForm.controls.email;
  }
  get password() {
    return this.loginForm.controls.password;
  }
  login() {
    if (this.loginForm.valid) {
      this.validar();
    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }

  validar() {
    this.usuariosServicio.validarUsuario(this.usuario).subscribe(
      datos => {
        this.respuesta = datos
        if(this.respuesta['resultado']=='OK'){
          this.usuariosServicio.setSuser(true);
          this.router.navigate(['/Home']);
        }
        if(this.respuesta['resultado']=='ADMIN'){
          this.router.navigate(['/Admin']);
          this.usuariosServicio.setSadmin(true);
        }
        if(this.respuesta['resultado']=='NO'){
          alert(this.respuesta['mensaje']);
        }
      }
    );
  }

  registrar(){
    this.router.navigate(['/registrar']);
  }
}
