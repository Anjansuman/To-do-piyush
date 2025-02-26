import { useState } from "react";
import axios from "axios";

export function CreateTodo({ todos, setTodos }){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function callBackend() {      
      fetch("http://localhost:3000/todos",{
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-type" : "application/json"
        }
      })
        .then(async function(res) {
          const json = await res.json();
          alert("Todo added");
        })
        setTodos([...todos, {
          title,
          description
        }])
  }

  return <div>
    <input id="title" style={{
      padding: 10,
      margin: 10,
    }} type="text" placeholder="title" onChange={function(e){
      const value = e.target.value;
      setTitle(e.target.value);
    }}></input><br></br>
    <input style={{
      padding: 10,
      margin: 10,
    }}  type="text" placeholder="description" onChange={function(e){
      const value = e.target.value;
      setDescription(e.target.value);
    }}></input><br></br>

    <button style={{
      padding: 10,
      margin: 10,
    }} onClick={callBackend} >Add a todo</button>
  </div>
}
