import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) { }

  getTasks(): Promise<any> {
  	return this.http.get('https://todo-backend-express.herokuapp.com/')
  	.toPromise().then((resp: Response ) => {
  		return resp.json();
  	})
  }

  createTask(taskTitle): Promise<any> {
    return this.http
      .post('https://todo-backend-express.herokuapp.com/', JSON.stringify({title: taskTitle}), {headers: this.headers})
      .toPromise()
      .then((resp: Response) => {
        return resp.json();
      })
  }

}