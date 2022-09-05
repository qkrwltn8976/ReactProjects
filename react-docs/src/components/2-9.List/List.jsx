import React from "react";

export default function List() {
  const todos = [
    { id: 1, text: "Drink Water" },
    { id: 2, text: "Wash Car" },
    { id: 3, text: "Listen LEcture" },
    { id: 4, text: "Go to bed" },
  ];

  const Item = (props) => {
    return (
      <li>
        {props.id}
        {props.text}
      </li>
    );
  };

  const todoList = todos.map((todo) => (
    <Item key={todo.id} id={todo.id} text={todo.text} />
  ));

  return <>{todoList}</>;
}
