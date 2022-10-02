import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categorias
  public selectorCategoria = 'todas'
  public posts: Post[] = []
  constructor(
    private postService: PostService
  ) {
    this.categorias = postService.getCategorias()
  }


   

  ngOnInit(): void {
    this.posts = this.postService.getAll()
    
  }

  filterPosts(){
    if(this.selectorCategoria === 'todas'){
      this.posts = this.postService.getAll()
    }else{
      this.posts = this.postService.getPostsByCategoria(this.selectorCategoria)
    }
    
  }

}
