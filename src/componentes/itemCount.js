import React, { useState } from "react";

function ItemCount({stock,initial}) {

    const [count, setCount] = useState(initial);
    
    function suma() {
        setCount(count + 1)
    }

    function resta() {
        setCount(count - 1)
    }

    return (
        <div className="countenedor">
            <button disabled={count <= 1} onClick={resta}>-</button>
            <span>{count}</span> 
            <button disabled={count >= stock} onClick={suma}>+</button>
        </div>
    );
}

export default ItemCount;