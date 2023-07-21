import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  toDos: any[] = [];
  completedToDos: any[] = [];
  newToDo: string = '';

  addToDo() {
    if (this.newToDo.trim() !== '') {
      const newToDoItem = {
        title: this.newToDo,
        completed: false,
      };
      this.toDos.push(newToDoItem);
      this.newToDo = '';
    }
  }

  onCompletedChange(toDo: any, i: any = null) {
    toDo.completed = !toDo.completed;
    if (toDo.completed) {
      this.completedToDos.push(toDo);
    } else {
      this.completedToDos.splice(i, 1);
    }
  }

  removeToDo(toDo: any) {
    const index = this.toDos.indexOf(toDo);
    if (index !== -1) {
      this.toDos.splice(index, 1);
    }
  }

  removeCompleted(completedToDo: any) {
    const index = this.completedToDos.indexOf(completedToDo);
    if (index !== -1) {
      this.completedToDos.splice(index, 1);
    }
  }
  currentTime = Date.now();
}
