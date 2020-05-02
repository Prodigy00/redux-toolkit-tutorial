import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Post } from "./features/posts/Posts";

function App() {
  return (
    <div className="App">
      <Post />
    </div>
  );
}

export default App;
