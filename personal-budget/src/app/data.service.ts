import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public myBudget = [];
  constructor(private http: HttpClient) {}

   public getData(){
    return this.http.get('http://localhost:3000/budget');
   }
}
