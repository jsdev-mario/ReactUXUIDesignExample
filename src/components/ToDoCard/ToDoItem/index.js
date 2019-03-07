import React from 'react';


const ToDoItem = ({todo, onTodoChecked}) => {

    return (

        <div className="media mb-3">
            <div className="form-checkbox mr-3">
                <input type="checkbox"
                       value="SelectTodo"
                       checked={todo.selected}
                       onChange={(event) => {
                           event.stopPropagation();
                           onTodoChecked(todo);
                       }}>

                </input>

                <span className="check">
                        <i className="zmdi zmdi-check zmdi-hc-lg"/>
                    </span>

            </div>
            <div className="media-body">
                <span className="text-grey d-block">{todo.title}</span>
                <label onClick={(event) => {
                    event.stopPropagation();
                    onTodoChecked(todo);
                }} className={`wra ${todo.selected && 'text-muted text-strikethrough d-block'}`}>
                    <span>{todo.notes}</span>

                </label>
            </div>
        </div>

    )
};

export default ToDoItem;