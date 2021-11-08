import React, {Component} from 'react';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4' ,
            padding: '10px',
            borderBottom: '1px ',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }

    markComplete = e => {
        console.log(this.props);
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                     {' '}
                     {title}                    
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        );
    };
};

const btnStyle = {
        background: '#FF0000',
        color: '#FFF',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        outline: 'none',
        cursor:'pointer',
        float:'right'
};

export default TodoItem;