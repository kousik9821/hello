import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Article} from "../model/article.model";
import {ApiService} from "../core/api.service";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  users: any;
  oppoSuits: any = ['Men', 'Women', 'Boys', 'Inspiration'];

  constructor(private router: Router, private apiService: ApiService,public fb: FormBuilder) { }
  oppoSuitsForm = this.fb.group({
    name: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.oppoSuitsForm.value))
  }
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
  editUser(id: number): void {
    //window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", id.toString());
   // alert(id)
    this.router.navigate(['edit-article']);
  };
  onLogout(){
    window.sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  changeSuit(e) {
    this.oppoSuitsForm.get('name').setValue(e.target.value, {
       onlySelf: true
    })
    alert(JSON.stringify(this.oppoSuitsForm.value))
  }
}
