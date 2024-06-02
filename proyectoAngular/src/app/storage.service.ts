import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
    // Método para guardar un objeto en el sessionStorage
    setSessionStorage(key: any, value: any): void {
      const jsonValue = JSON.stringify(value);
      sessionStorage.setItem(key, jsonValue);
    }
  
    // Método para leer un objeto del sessionStorage
    getSessionStorage(key: any): any {
      const jsonValue = sessionStorage.getItem(key);
      if (jsonValue) {
        return JSON.parse(jsonValue);
      }
      return null;
    }
  
    // Método para eliminar un objeto del sessionStorage
    removeSessionStorage(key: any): void {
      sessionStorage.removeItem(key);
    }
  
    // Método para limpiar todo el sessionStorage
    clearSessionStorage(): void {
      sessionStorage.clear();
    }
}
