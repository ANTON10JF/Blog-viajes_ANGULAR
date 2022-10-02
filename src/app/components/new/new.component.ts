import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public form: FormGroup;
  public categorias
  constructor(private fb: FormBuilder,private postService: PostService) {

    this.categorias = postService.getCategorias()

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      imagen: ['', Validators.required],
      textoPublicacion: ['', Validators.required],
      fechaPublicacion: ['', Validators.required],
      categoria: ['', Validators.required],

    
    })
   }

  ngOnInit(): void {
  }

  addPost(){
   const formValue = this.form.getRawValue() 
   const post: Post = {
    titulo: formValue.titulo,
    imagen: formValue.imagen,
    textoPublicacion: formValue.textoPublicacion,
    fechaPublicacion: formValue.fechaPublicacion,
    categoria: formValue.categoria,

   } 
    this.postService.addPost(post)
    this.form.reset()
  }

}
