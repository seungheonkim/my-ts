import React, {useContext} from "react";
import TodoItem from "./Todo";
import classes from "./Todos.module.css";
import TodosContext from "../store/todos-context";

//해당 함수는 functional component 라는걸 React.FC 라고 명시해주는게 필요하다
const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item => (
                <TodoItem key={item.id} text={item.text} onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}/>
            ))}
        </ul>
    );
};

export default Todos;
