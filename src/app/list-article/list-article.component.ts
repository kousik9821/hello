import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Article} from "../model/article.model";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  users: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( data => {
        console.log(data)
          this.users = data;
      });
  }

  
}
