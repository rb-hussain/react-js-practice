

const winner = () => {
    let x = 0;
    let y = 1;
    if (x === 1 && y===1 ) {
      alert("X is winner");  
    }
    else{
        alert ("X is not winner");
    }
};

const IfElse = () => {
    return(
    <>
    {winner}
    </>
    )
};


export default IfElse;
