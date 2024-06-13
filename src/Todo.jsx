import "./style.css"
import {useState} from "react";
import {InputTodo} from "./components/InputTodo";
import {IncompleteTodos} from "./components/IncompleteTodos";
import {CompleteTodos} from "./components/CompleteTodos";

export const Todo = () => {
    const [todoText, setTodoText] = useState("")
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const onChangeTodoText = (event) => setTodoText(event.target.value);
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };
    const onClickComplete = (addIndex) => {
        const newTodos = [...completeTodos, incompleteTodos[addIndex]];
        setCompleteTodos(newTodos)
        onClickDeleteInComplete(addIndex);
    }
    const onClickDeleteInComplete = (deleteIndex) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(deleteIndex, 1);
        setIncompleteTodos(newTodos);
    }
    const onClickReturn = (returnIndex) => {
        const newDone = [...completeTodos];
        newDone.splice(returnIndex);
        setCompleteTodos(newDone);

        const newTodes = [...incompleteTodos, completeTodos[returnIndex]]
        setIncompleteTodos(newTodes);
        onClickDeleteComplete(returnIndex);
    }
    const onClickDeleteComplete = (deleteIndex) => {
        const newTodos = [...completeTodos];
        newTodos.splice(deleteIndex, 1);
        setCompleteTodos(newTodos);
    }
    return (
        <>
            <InputTodo todoText={todoText}
                       onChange={onChangeTodoText}
                       onClick={onClickAdd}
                       disabled={incompleteTodos.length >= 5}/>
            {incompleteTodos.length >= 5 && (<p style={{color: "red"}}>登録できるTODOは5こまでです</p>)}
            <IncompleteTodos
                incompleteTodos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDeleteIncomplete={onClickDeleteInComplete}/>
            <CompleteTodos
                completeTodos={completeTodos}
                onClickReturn={onClickReturn}
                onClickDeleteComplete={onClickDeleteComplete}/>
        </>
    );
};
