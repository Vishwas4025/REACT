import { useState } from "react";


const Calculator=()=>{
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const cal=(op)=>{
        const a = Number(num1);
        const b = Number(num2);
        switch(op){
            case '+':
                setResult(a+b)
                break;
            case '-':
                setResult(a-b)
                break;
            case '*':
                setResult(a*b)
                break;
            case '/':
                if(num2 !== 0){
                    setResult(a/b)
                }
                else{
                    setResult("Cannot divide with 0")
                }
                break;
            default:
                break;
        }
    }


    return(
        <div>
            <input
                name="num1"
                onChange={(e)=>setNum1(e.target.value)}
                value={num1}
                placeholder="num 1"
            />
            <input
                name="num2"
                onChange={(e)=>setNum2(e.target.value)}
                value={num2}
                placeholder="num 2"
            />
            <div>
                <button onClick={()=>{cal('+')}}>Add</button>
                <button onClick={()=>{cal('-')}}>Sub</button>
                <button onClick={()=>{cal('*')}}>Mul</button>
                <button onClick={()=>{cal('/')}}>Div</button>
            </div>
            <div>
                Result : {result}
            </div>
        </div>
    )
}

export default Calculator;