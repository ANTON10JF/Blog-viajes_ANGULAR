import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './vista-post.component.html',
  styleUrls: ['./vista-post.component.css']
})
export class HomeComponent implements OnInit {

  miPost: Post | any;
  constructor(
      private activatedRoute: ActivatedRoute,
      private postService: PostService,

    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['idpost'])
      this.miPost = this.postService.getById(id);
    })
  }

}
