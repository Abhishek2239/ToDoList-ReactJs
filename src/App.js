import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import List from "./components/list/list";

const App = () => {
  // List of all tasks
  const [items, setItems] = useState([]);
  // Input Text
  const [input, setInput] = useState();
  // Modal Input Text
  const [modalInputText, setModalInputText] = useState();
  // Text to be edited
  const [editText, setEditText] = useState();
  //Handles the main input
  const inputHandler = e => {
    setInput(e.target.value);
  };

  //adds the item to the list
  const addItem = () => {
    if (input) {
      setItems([input, ...items]);
    }
    setInput("");
  };

  //deletes the item from the list
  const delItem = text => {
    let arr = [...items];
    arr.splice(items.findIndex(el => el === text), 1);
    setItems(arr);
  };

  //Modal state
  const [show, setShow] = useState(false);
  //close modal
  const handleClose = () => setShow(false);
  //open modal
  const handleShow = () => setShow(true);

  //edit the task
  const editItem = text => {
    handleShow();
    setModalInputText(text);
    setEditText(text);
  };

  //handles modal input
  const ModalInputHandler = e => {
    setModalInputText(e.target.value);
  };

  //Saves the edit
  const saveEdit = () => {
    let arr = [...items];
    arr[arr.findIndex(el => el === editText)] = modalInputText;
    setItems(arr);
    handleClose();
  };

  //key press enter
 
    document.addEventListener('keypress',function(event){
      if(event.keyCode===13||event.which===13){
        if (input) {
          setItems([input, ...items]);
        }
        setInput("");
        console.log('enter')
      }
      
    })
    
  


  return (
    <div className="App">
      <Modal
        isOpen={show}
        className="modal"
        overlayClassName="modalOverlay"
        onRequestClose={handleClose}
      >
        <div className="modalContent">
          <h3 className="modalHeading">Edit Task</h3>
          <input
            className="modalInput"
            onChange={e => ModalInputHandler(e)}
            type="text"
            value={modalInputText}
          />
          <div className="modalBtnWrapper">
            <button className="modalSaveBtn btn" onClick={saveEdit}>
              Save
            </button>
            <button className="modalCancelBtn btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <h1 className="heading">ToDo List</h1>
      <div className="input-wrapper">
        <input
          onChange={e => inputHandler(e)}
          className="input"
          value={input}
          type="text"
          placeholder="Enter Task"
        />
        <button
          className="addBtn btn"
          onClick={addItem}
        >
          Add
        </button>
      </div>

      <List input={input} items={items} delItem={delItem} editItem={editItem} />
    </div>
  );
};

export default App;
