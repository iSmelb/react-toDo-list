import { useState } from "react";

const Counter = function() {
    const [likes, setLikes] = useState(0)

    function increment() {
        setLikes(likes + 1)
      }
    
      function decriment() {
        setLikes(likes - 1)
      }
    
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decriment}>decrement</button>
        </div>
    )
}

export default Counter;