import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListArticleComponent} from "./list-article/list-article.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-article', component: ListArticleComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
