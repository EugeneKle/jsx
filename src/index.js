// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import App component into index.js
import App, {message} from "./components/App";

// 2) Get a reference to the div with ID root
const rootElement = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(rootElement);
// 4) Show the import App component on the screen
root.render(<App />);
