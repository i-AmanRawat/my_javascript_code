import { useReducer } from 'react'
//The useReducer() hook is a built-in hook in React that provides a way to manage complex state logic by using a reducer function. 
//It is an alternative to the useState() hook when you need to manage state transitions that involve multiple actions or have more complex logic.

//The reducer function defines how the state is updated based on different actions. It receives the current state and an action as arguments and returns the new state.
function reducer(state, action){  //reducer function
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
//The useReducer() hook is useful when you have complex state logic that involves multiple actions or requires derived state calculations. 
//It provides a more organized way to handle state transitions and can be especially beneficial for larger-scale applications.

export default function App(){
//   const [state, dispatch] = useReducer(reducer, initArg, initFunc)
  //dispatch func, is essentially what we call inorder to update our state, with a action we want to perform on our state
  const [state, dispatch] = useReducer(reducer, {num: 0} )    //takes two arguments: the reducer function and the initial state. generally we wrap intial state value inside a object
  return(
    <>
      <button onClick={()=>dispatch({what: 'decrement'})}>-</button>
      <span>{state}</span>
      <button onClick={()=>dispatch({what: 'increment'})}>+</button>
    </>
  )
}
