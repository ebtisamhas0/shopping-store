import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myStorage = window.localStorage;
  constructor(private http:HttpClient) { }
  clearCart(): void{
    this.myStorage.clear();
  }
  
}
