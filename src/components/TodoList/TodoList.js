import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component{

    render(){
        const {todos} = this.props;
        const todoList = todos.map(
            it => (
                <TodoItem
                    key = {it.id}
                    done = {it.done} 
                    >{it.text}
                </TodoItem>
            )
        )
        return(
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoList;