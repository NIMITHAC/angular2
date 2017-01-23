import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  todos: string[] = [];
  newTask: string = '';

  constructor(public tasksService: TasksService) {
  	this.getAllTasks();
  }

  getAllTasks() {
    this.tasksService.getTasks()
    .then(tasks => {
      this.todos = tasks;
    })
  }

  addTask(){
  	this.tasksService.createTask(this.newTask)
  	.then(resp => {
  		this.todos = this.todos.concat(resp);
	  	this.newTask = '';
  		// this.getAllTasks();
  	});
  }

  deleteTask(task){
  	this.todos = this.todos.filter(todo => todo !== task);
  	console.log(task);
  }
}