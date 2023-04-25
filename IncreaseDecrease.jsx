import { useState } from "react";
export default function IncreaseDecrease({}) {

    const[count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <p>Number: {count}</p>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}