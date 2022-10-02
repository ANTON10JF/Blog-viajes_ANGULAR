import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() post: any;
  miPost: Post | any
  constructor() { }

  ngOnInit(): void {
    this.miPost = this.post;
  }

}
