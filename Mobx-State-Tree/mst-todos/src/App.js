import { observer } from "mobx-react";
import React, { Component } from 'react';
import {
  Checkbox,
  Divider,
  Icon,
  Input,
  Layout,
  List,
  notification
} from "antd";
import TodoStore from './stores/TodoStore';
import "antd/dist/antd.css";


class App extends Component {
  constructor() {
    super();
    this.todoStore = TodoStore.create({todos : []});
  }

  handleAddTodo = e => {
    if(e.key === 'Enter'){
      this.todoStore.addTodo({
        id : Math.floor(Math.random() * 100) +1,
        title : e.currentTarget.value,
        done : false
      });

      notification.success({
        message : "New Todo Added",
        description : e.currentTarget.value,
        duration : 2
      });
    }
  }

  render() {
    const contentStyle = {
      padding : "0 50px",
      margin : "1rem 0"
    };
    
    const inputStyle = {
      margin : "1rem 0"
    };

    return (
      <Layout>
        <Layout.Content style={contentStyle}>
            <Input
               placeholder = "New Todo"
               size = "large"
               type = "text"
               onKeyDown = {this.handleAddTodo}
               style = {inputStyle}
            />

        <div className="todos-stats">
          <h4>Total: {this.todoStore.todoCount}</h4>
          <h4>Completed: {this.todoStore.completedCount}</h4>
        </div>

        <Divider/>

        <List
          header={<h3>Todo List</h3>}
          bordered
          dataSource={this.todoStore.todos}
          size="large"
          renderItem={todo => (
            <List.Item key={todo.id}>
              <Checkbox onClick={todo.toggleDone} checked={todo.done} />
              <span>{todo.title}</span>
              <button onClick={() => this.todoStore.deleteTodo(todo.id)}>
                <Icon type="delete" />
              </button>
            </List.Item>
          )}
        />

        </Layout.Content>
      </Layout>
    );
  }
}

export default observer(App);
