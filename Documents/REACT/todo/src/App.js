import React from "react";

var todoList = [
  { id: "1", title: "do homework" },

  { id: "2", title: "cook" },

  { id: "3", title: "sleep" },
];

function App() {
  return (
    <div>
      <h1>"To Do List"</h1>
      <ul>
        {
          //const array1 = [1, 2, 3];

          //const map1 = array1.map();

          todoList.map(function (item) {
            return <li key={item.id.title}>{item.title}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default App;
