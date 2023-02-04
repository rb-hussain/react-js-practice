import { useState } from "react";
import TodoList from "./TodoList";
import Events from "../events/Events";
import UserDataForm from "../forms/UserDataForm";
import UserDataFormEvent from "../forms/UserDataFormEvent";
import FirstHook from "../hooks/FirstHook";
import List from "../list/List";
const Todo = () => {

  const [itemslist,setitems] = useState (["Hello","World"],)    
      
    const addItemHandle = (itemText) =>{
            setitems([...itemslist,itemText ]);
        }

    // const todoArr = ["One","Two","Three"];
    // const [todolist,setTodo] = useState (["One","Two","Three","Four"]); 

    // const todomap = todolist.map((todoitems2) => { 
    //     return  <div>{todoitems2}</div> 
    //  });

   
    //  const handleSubmit = (event) => {
    //         setTodo([...todolist, inputRef.current.value]);
    //         inputRef.current.value = '';
    //       };

//     const [todos, setTodos] = useState([]);
//   const inputRef = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTodos([...todos, inputRef.current.value]);
//     inputRef.current.value = '';
  //};

    return (
    <>
    <div> <TodoList /> </div>
    <Events />
    <UserDataForm />
    <UserDataFormEvent />
      <List items={itemslist} />
      <FirstHook add={addItemHandle} />
    </>
);
};

export default Todo;