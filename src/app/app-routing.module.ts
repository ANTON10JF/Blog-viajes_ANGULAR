import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent as VistaPostComponent } from './components/vista-post/vista-post.component';
import { NewComponent } from './components/new/new.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  
  { path: 'new', component: NewComponent },
  { path: 'post', component: PostComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'post/:idpost', component: VistaPostComponent},
  { path: '**', redirectTo: '/post' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
