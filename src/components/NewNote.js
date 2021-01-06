import React from "react";

function NewTodo(props) {

    function openModal(){
        document.getElementById("newTodoModal").style.display = "flex";
    }

    function closeModal(e) {
        if (e.target === document.getElementById("newTodoModal"))
            document.getElementById("newTodoModal").style.display = "none";
    }

    function addTodo(e) {
        e.preventDefault();
        let form = document.forms["addTodo"];
        let title = form.title.value.trim();
        let body = form.body.value.trim();
        if(title !== "" && body !== "") {
            let newTodo = {
                id: Math.floor(Math.random() * 123456789),
                title: form.title.value,
                body: form.body.value,
                completed: false,
            }

            props.addTodo(newTodo);

            form.reset();
        } else {
            alert('please fill the form');
        }


    }

    return(
        <>
            <button className="add-todo" onClick={openModal}>+</button>
            <div className="new-todo" id="newTodoModal" onClick={ e => closeModal(e) }>
                <form onSubmit={addTodo} name="addTodo">
                    <input name="title" type="text" required/>
                    <textarea className="body" name="body" required/>
                    <button className="btn">Add Todo</button>
                </form>
            </div>
        </>
    )
}

export default NewTodo;