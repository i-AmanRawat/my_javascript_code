import React from "react";
import { useState, useReducer } from "react";

//making actions constant bcz will be using them in code so if need to change i can simply refer to action obj
const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  TOGGLE_TODO: "toggle-todo",
};

function reducer(todos, action) {
  switch (action.what) {
    case ACTIONS.ADD_TODO: {
      return [...todos, newToDo(action.payload.text)];
    }
    case ACTIONS.DELETE_TODO: {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    case ACTIONS.TOGGLE_TODO: {
      console.log(todos);
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    }
    default:
      return todos;
  }
}

function newToDo(todo) {
  return {
    id: Date.now(), //id will be need to track each todo individually inorder to perform actions on them like toggle and delete 
    todo,
    complete: false,
  };
}

export default function App() {
  const [text, setText] = useState(""); //to track input field of todo
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div className="container">
      <div className="sub-container-01 ">
        <div className="">
          <input
            type="text"
            className="input-todo"
            value={text}
            onChange={(e) => {
              console.log(text);
              setText(e.target.value);
            }}
          />
          <button
            className="ADD_TODO btn"
            onClick={() => {
              dispatch({ what: ACTIONS.ADD_TODO, payload: { text } });
              setText("");
            }}
          >
            ADD_TODO
          </button>
{/* we pass all the other info that will be need in reducer function to perform action as a payload although we can use someother name */}
          <button
            className="print-todos btn"
            onClick={() => {
              console.log(todos);
            }}
          >
            print
          </button>
        </div>
      </div>
      <div className="sub-container-02 ">
        {todos.map((todo) => {
          return <DisplayTodo todo={todo} key={todo.id} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

function DisplayTodo({ todo, dispatch }) {
  return (
    <div className="">
      <span
        className=""
        style={{
          color: todo.complete ? "#343d33" : "#000",
          textDecoration: todo.complete ? "line-through" : "none",
        }}
      >
        {todo.todo}
      </span>
      <button
        className="done-btn btn"
        onClick={() =>
          dispatch({ what: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        done
      </button>
      <button
        className="delete-btn btn"
        onClick={() =>
          dispatch({ what: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
}
