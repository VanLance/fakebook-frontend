import { useState } from 'react'

interface CounterProps {
  exercise:string
}

export default function Counter(props:CounterProps){
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p><strong>{props.exercise}</strong></p>
      <button onClick={()=> setCount(count+1)}>Count is {count}</button>
      <button onClick={()=> setCount(0)}>Reset Counter</button>
    </div>
  )
}
