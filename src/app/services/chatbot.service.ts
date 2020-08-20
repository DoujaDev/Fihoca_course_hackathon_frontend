import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  URL = "http://10.250.5.14:8080/"
  constructor(private http:HttpClient,
          private router : Router) { 
  
  }


  /*navigateToAtras() {
    this.router.navigate(['/coberturas']);
  }*/

  navigateToSiguiente() {
   // return this.http.post<number>(this.URL);
  }
}
