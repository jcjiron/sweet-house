import * as constants from './../constants/local-storage.constant';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private secretKey;
  public keys = constants;

  constructor() {
    this.secretKey = environment.localStorageKey;
  }

  /**
   * 
   * @param key 
   * @param data 
   */
  set(key: string, data: any) {

    if (environment.production) {

      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
      const encryptedKey = CryptoJS.SHA256(key).toString();
  
      localStorage.setItem(encryptedKey, encryptedData);
    }else{

      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  /**
   * Recupera valores del localstorage por medio de la llave
   * @param key Llave a obtener
   */
  get(key: string): any {

    if (environment.production) {
      const encryptedKey = CryptoJS.SHA256(key).toString();
      const item = localStorage.getItem(encryptedKey);
  
      if (item === undefined || item === null) {
  
        return null;
      }
  
      const dencryptedData = CryptoJS.AES.decrypt(item, this.secretKey).toString(CryptoJS.enc.Utf8);
  
      if (this.isJson(dencryptedData)) {
  
        return JSON.parse(dencryptedData);
      } else {
  
        return dencryptedData;
      }
    }else{
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)): null ; 
    }
  }

  /**
   * 
   */
  clear() {

    localStorage.clear();
  }

 

  /**
   * Remueve una propiedad especifica del local storage
   * @param property Propiedad a eliminar
   */
  removeItem(property: string) {

    const encryptedKey = CryptoJS.SHA256(property).toString();

    localStorage.removeItem(encryptedKey);
  }

 

  /**
   * Valida si una cadena cumple el formato JSON
   * @param str Cadena a validar
   * @returns True si cumple el formato False no cumple el formato
   */
  private isJson(str) {

    try {

      JSON.parse(str);

    } catch (e) {

      return false;
    }

    return true;
  }
}
