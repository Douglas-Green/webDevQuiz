/** @format */

// Import necessary modules and components
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CardContainer from "./components/CardContainer";

// Define a new Main component, I threw an error saying in react react-hook useState cannot be called at the top level. react hooks must be called in a react function or a custom react hook function. This is the reasoning for this work around. I'm sure there is a better solution than this one but Im still learning.
function Main() {
  // Use the useState hook that I initially wanted to use but threw error above because I was defining it at the top level.
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <React.StrictMode>
      {/* If the modal is not open, render the App component inside the CardContainer component. This is what I was trying to get at, I want the modal to hide the entire app if it is open. When modalIsOpen = false then the app should be rendered */}
      {!modalIsOpen ? (
        <CardContainer>
          <App />
        </CardContainer>
      ) : (
        // Here modalIsOpen=true so the modal should be shown and the app hidden
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)} // modalIsOpen=false vice versa
          contentLabel='Error Modal'
          className='modal-content'></Modal>
      )}
    </React.StrictMode>
  );
}

// A couple swipes from the magic wand and voila! The Main component is rendered to the root element in the index.html file.
ReactDOM.render(<Main />, document.getElementById("root"));

// ignore this function, I was just too lazy to remove it in multiple files, it is not necessary for the project
reportWebVitals();
