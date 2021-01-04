import React from "react";
import Todo from "./Todo";
import Todos from "./Todos";
import Conditionnal from "./Conditionnal";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: Todos,
            isLoading: true,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({isLoading: false})
        },2000)
    }


    handleChange(id){
        this.setState(prevState => {
            let updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) todo.completed = !todo.completed;
                return todo;
            });
            return prevState.todos = updatedTodos;
        })
    }

    render() {
        const TodoList = this.state.todos.map(todo => {
            return(
                <>
                    <Todo key={todo.id} todo={todo} handleChange={this.handleChange}/>
                    <hr/>
                </>
            )
        });

        return (
            <div className="todos">
                {/*{TodoList}*/}
                <Conditionnal isLoading={this.state.isLoading} />
            </div>
        )
    }
}

export default App;