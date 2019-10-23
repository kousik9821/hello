import { Component, OnInit,Inject } from '@angular/core';
import { Article } from '../model/article.model';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
user:Article;
editForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private apiService:ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-article']);
      return;
    }
    this.editForm = this.formBuilder.group({
      articleId: [''],
      title: ['', Validators.required],
      category: ['', Validators.required]
    
    });
    this.apiService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.apiService.updateArticle(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
            alert('Article updated successfully.');
           this.router.navigate(['list-article']);
        },
        error => {
          alert(error);
        });
  }

}
