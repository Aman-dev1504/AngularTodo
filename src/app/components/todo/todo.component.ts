import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = []
  constructor(private todoService:TodosService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
     console.log("todos from service")
      console.log(todos)
       this.todos=todos
      
  
  })

}
AddTodo(todoForm:NgForm):void{
  console.log(todoForm.value)
  let todo:Todo = todoForm.value;
  this.todoService['addTodo'](todo).subscribe((todo: any)=>{
     console.log("todo response from server ",todo) })
  }
}
