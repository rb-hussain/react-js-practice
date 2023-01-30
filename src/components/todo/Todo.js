import TodoList from "./TodoList";
import { useState } from "react";
const Todo = () => {
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
    </>
);
};

export default Todo;