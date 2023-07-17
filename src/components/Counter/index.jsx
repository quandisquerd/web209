import React, { useContext } from 'react'
// import { CounterContext } from '../../context/CounterContext'
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
  // const { state, dispatch } = useContext(CounterContext)
  const { count } = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>Count:{count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'INCREASE', payload: 10 })}>decrement</button>
    </div >
  )
}

export default Counter