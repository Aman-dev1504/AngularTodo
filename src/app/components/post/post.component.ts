import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

import { Post } from 'src/app/models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: Post[] = []
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
     console.log("posts from service")
      console.log(posts)
       this.posts=posts
      
  
  })

}
AddPost(postForm:NgForm):void{
  console.log(postForm.value)
  let posts:Post = postForm.value;
  this.postService['addPost'](posts).subscribe((posts: Post)=>{
     console.log("todo response from server ",posts) })
  }
}
