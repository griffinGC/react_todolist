import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state ={
    input : '',
    todos:[
      {id : 0, text : "리액트 스터디!", done : true},
      {id : 1, text : "node study", done : false},
    ]
  }

  id = 1;
  getId = () =>{
    return ++this.id;
  }

  handleChange= (e) =>{
    const {value} = e.target;
    this.setState({
      input : value
    });
  }

  handleInsert = () =>{
    const {todos, input} = this.state;

    const newTodo ={
      text : input,
      done : false,
      id : this.getId()
    }

    this.setState({
      todos : [...todos, newTodo],
      input : ''
    });
  }


  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleInsert
    } = this;

    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} value={input} onInsert={handleInsert}/>
        <TodoList todos={todos}/>
      </PageTemplate>
    );
  }
}

export default App;
