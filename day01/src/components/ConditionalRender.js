import { useState } from "react";

const ConditionalRender=()=>{
    const [showMessage1, setShowMessage1] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);

    const handleClick1=()=>{
        setShowMessage1(!showMessage1);
    }

    const handleClick2=()=>{
        setShowMessage2(!showMessage2);
    }

    return(
        <>
            <button onClick={handleClick1}>{showMessage1 ? 'Hide' : 'Show'}</button>
            <button onClick={handleClick2}>{showMessage2 ? 'Hide' : 'Show'}</button>
            {showMessage1 && showMessage2 && 'this is toggled message'}
        </>
    )
}

export default ConditionalRender;