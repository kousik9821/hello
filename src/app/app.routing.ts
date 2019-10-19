import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListArticleComponent} from "./list-article/list-article.component";
import {EditArticleComponent} from "./edit-article/edit-article.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-article', component: ListArticleComponent },
  { path: 'edit-article', component: EditArticleComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
