import React from 'react';
import {SortableElement, SortableHandle} from 'react-sortable-hoc';

import labels from 'app/routes/todo/data/labels'
import users from 'app/routes/todo/data/users'
// This can be any component you want
const DragHandle = SortableHandle(() =>
    <i className="zmdi zmdi-menu draggable-icon d-none d-sm-flex" style={{fontSize: 25}}/>);


const ToDoItem = SortableElement(({todo, onTodoSelect, onTodoChecked, onMarkAsStart}) => {
    let user = null;
    if (todo.user > 0)
        user = users[todo.user - 1];
    return (
        <div className="module-list-item">
            <div className="module-list-icon">
                <span className="bar-icon">
                  <DragHandle/>
                </span>

                <div className="form-control-checkbox d-flex">
                    <div className="form-checkbox">
                        <input type="checkbox"
                               checked={todo.selected}
                               onChange={(event) => {
                                   event.stopPropagation();
                                   onTodoChecked(todo);
                               }}
                               value="SelectTodo"
                        />

                        <span className="check">
                            <i className="zmdi zmdi-check zmdi-hc-lg"/>
                        </span>
                    </div>

                    <span className="icon-btn" onClick={() => {
                        todo.starred = !todo.starred;
                        onMarkAsStart(todo);
                    }}>
                        {todo.starred ?
                            <i className="zmdi zmdi-star zmdi-hc-lg"/> :
                            <i className="zmdi zmdi-star-outline zmdi-hc-lg"/>
                        }

                    </span>
                </div>
            </div>

            <div className="module-list-info" onClick={() => {
                onTodoSelect(todo);
            }}>
                <div className="row">
                    <div className="module-todo-content col-9 col-sm-10 col-md-9">
                        <div className={`subject ${todo.completed && 'text-muted text-strikethrough'}`}>
                            {todo.title}
                        </div>
                        <div className="manage-margin">
                            {labels.map((label, index) => {
                                return (todo.labels).includes(label.id) &&
                                    <div key={index}
                                         className={`badge text-white bg-${label.color}`}>{label.title}</div>
                            })}
                        </div>
                    </div>
                    <div className="module-todo-right col-3 col-sm-2 col-md-2">
                        <div className="d-flex flex-row-reverse">
                            {user === null ?
                                <span
                                    className="avatar size-40 rounded-circle bg-grey d-flex align-items-center justify-content-center">U</span>
                                : <img className="avatar size-40 rounded-circle" alt={user.name}
                                       src={user.thumb}/>}

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
});

export default ToDoItem;