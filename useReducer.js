import { useReducer } from 'react'

function reducer(state, action){
  switch(action.what){
    case 'increment':{
      return {
        num: state.num +1
      }
    }
      case 'decrement':{
      return {
        num: state.num -1
      }
    }
      default:{
        return
    }
  }
}

export default function App(){
//   const [state, dispatch] = useReducer(reducer, initArg, initFunc)
  const [state, dispatch] = useReducer(reducer, {num: 0} )
  return(
    <>
      <button onClick={()=>dispatch({what: 'decrement'})}>-</button>
      <span>{state}</span>
      <button onClick={()=>dispatch({what: 'increment'})}>+</button>
    </>
  )
}
