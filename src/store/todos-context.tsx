import React, {useState} from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
}

const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {
    },
    deleteTodo: (id: string) => {
    },
});

export const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevState) => {
            return [...prevState, newTodo];
        });
    };

    const deleteTodoHandler = (id: string) => {
        setTodos(prevState => {
            return prevState.filter(todo => todo.id !== id);
        });
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        deleteTodo: deleteTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosContext;