import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/servises/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsService:PostsService) { }

  postsList:any
  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data)=>{
      this.postsList = data;
    })
    }
  }
