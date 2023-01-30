import { useRef, useState } from "react";

const TodoList = (props) => {
    const todoHeading ="Todo List";
    const OnSubmitHandler = (event) => {
         event.preventDefault();
       };
       const todeItemRef = useRef(null); 
       const [todos, setTodos] = useState(["One","Two","Three","Four"]);

       const getTodoItems = () => {
        setTodos([...todos, todeItemRef.current.value]);
        todeItemRef.current.value ='';
        console.log(todos);
       };
    
       return (
    <>
<div className="container">
        <h1 className="text-center">{todoHeading}</h1>
    <div className="row">
        <form onSubmit={OnSubmitHandler}>
            <input ref={todeItemRef} type="text" name="TodoField" />
            <button onClick={getTodoItems}> Add</button>
        </form>
        <div>
            {todos.map((todoShow, key)=>{
           return <div key={key}> {todoShow}</div>
            })}
        </div>
    </div>
</div>

    </>
);
};

export default TodoList;