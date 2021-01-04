import React from "react";



function Todo(props){

    const {id, title, body, completed} = props.todo;
    const style = {
        display: !title && "none",
        textDecoration: completed && "line-through",
        opacity: completed && "0.4",
    }

    return (
        <div className="todo" style={style}>

            <input
               type="checkbox"
               className="checkbox"
               checked={completed}
               onChange={()=> props.handleChange(id)}
            />

            <div className="content">

                <h3 className="title">{title}</h3>

                <p className="body">{body}</p>

            </div>

        </div>
    )

}

export default Todo;