import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
@Injectable({ providedIn: 'root' })
export class TodosService {
  [x: string]: any;
  url: string = "https://jsonplaceholder.typicode.com/todos";
  constructor(private httpClient: HttpClient) {}
  /* 
  getTodos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  } 
  */
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }
  addTodos(todo:Todo):Observable<Todo>{    return this.httpClient.post<Todo>(this.url,todo);
  
  }
}
