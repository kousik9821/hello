import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Article} from "../model/article.model";
import {Observable} from "rxjs/index";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/';

  login(loginPayload) {
    
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
     
 
      
      
    }

    //var creds = 'username=' + loginPayload.username + '&password=' + loginPayload.password + "&grant_type=password"+"&scope=read" ;
    
    return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers});
 

  }

  getUsers() {
    return this.http.get(this.baseUrl + 'user/articles?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

}
