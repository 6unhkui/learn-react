import {types} from "mobx-state-tree";

const Todo = types
   .model("Todo", {
       id : types.number,
       title : "", //types.string
       done : false
   })
   .actions(self => ({
       toggleDone() {
           self.done = !self.done;
       }
   }));

const TodoStore = types
   .model("TodoStore", { // observable 상태 생성
       todos : types.array(Todo)
   })
   .views(self => ({ // computed 정의
       get todoCount() {
           return self.todos.length;
       },
       get completedCount() {
           return self.todos.filter(todo => todo.done === true).length;
       }
   }))
   .actions(self => ({ // action 정의
       addTodo(todo) {
           self.todos.push(todo);
       },
       deleteTodo(id) {
           self.todos = self.todos.filter(t => t.id !== id);
       }
   }))

export default TodoStore;