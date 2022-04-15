import {useState} from "react"
import Button from "../componets/Button"
import CounterNumber from "../componets/CounterNumber"

export default function Counter() {
  let [number, setNumber] = useState(0)

  const handleAdd=()=>{
    setNumber(number+1)
  }

  const handleSub=()=>{
    setNumber(number-1)
  }

    return(
        <section>
      <Button symbol="-" onClick={handleSub}/>
      <CounterNumber number={number}/>
      <Button symbol="+" onClick={handleAdd}/>
        </section>
    )
}