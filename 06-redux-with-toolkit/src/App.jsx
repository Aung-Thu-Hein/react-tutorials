import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementAsync, incrementByAmount } from './counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>increasement</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount({count: 5}))}>increase by amount</button>
      <button onClick={() => dispatch(incrementAsync(10))}>Async Amount</button>
    </>
  )
}

export default App
