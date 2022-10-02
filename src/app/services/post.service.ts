import { Injectable } from '@angular/core';
import { POST } from '../db/post.db';
import { Categorias } from '../interfaces/categorias';

import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = POST
  private categorias: Categorias[] = [{titulo: 'playa'},{titulo: 'montaña'},{titulo: 'ciudad'},{titulo: 'rural'},{titulo: 'festivales'}  ]
  constructor() { }

  getAll() : Post[] {
    return this.posts;
  }

  getById(id: number) : Post | any {
    return this.posts.find(post => post.id === id);
  }

  getCategorias() : ReadonlyArray<Categorias> {
    return this.categorias;
  }

  addPost(post: Post) {
    post.id = this.posts.length + 1;
    this.posts.push(post);
  }

  getPostsByCategoria(categoria: string) : Post[] {
    console.log(categoria)
    return this.posts.filter(post => post.categoria === categoria);
  }

  

 

}
