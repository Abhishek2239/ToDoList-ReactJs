import React from "react";

const ListItem = ({ text, delItem, editItem }) => {
  return (
    <>
      <div className="list-item">
        <p className="list-text">{text}</p>

        <div className="list-btn-wrapper">
          <button onClick={() => editItem(text)} className="btn listbtn">
            <i className="fas fa-edit" />
          </button>
          <button onClick={() => delItem(text)} className="btn listbtn">
            <i className="fas fa-trash" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ListItem;
