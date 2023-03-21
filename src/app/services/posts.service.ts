import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
@Injectable({ providedIn: 'root' })
export class PostsService {
  [x: string]: any;
  url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private httpClient: HttpClient) {}
  /* 
  getTodos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  } 
  */
  getPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
  AddPost(post:Post):Observable<any>{
    return this.httpClient.post<any>(this.url,post);
  
  }
}
