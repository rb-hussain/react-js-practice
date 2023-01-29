import { useRef } from "react";

const TodoList = () => {
    const todoHeading ="Todo List";
    const OnSubmitHandler = (event) => {
         event.preventDefault();
       };
       const todeItemRef = useRef(null);
       const getTodoItems = () => {
        console.log(todeItemRef.current.value);
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
    </div>
</div>
    </>
);
};

export default TodoList;