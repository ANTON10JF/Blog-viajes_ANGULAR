import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.post = this.postService.getAll();
    
  }

}
