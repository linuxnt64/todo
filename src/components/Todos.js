import React, { Component } from "react";
import TodoItem from './TodoItem'

//import 

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => {
            return <TodoItem markComplete={this.props.markComplete} delTodo={this.props.delTodo} todo={todo} key={todo.id} />
        })
    }
}

export default Todos;