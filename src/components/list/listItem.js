import React from "react";

const ListItem = ({ text, delItem, editItem }) => {
  return (
    <>
      <div className="list-item">
        <p className="list-text">{text}</p>

        <div className="list-btn-wrapper">
          <button onClick={() => editItem(text)} className="btn  listbtn">
            <i className="edited ion-edit edit" />
          </button>
          <button onClick={() => delItem(text)} className="btn  listbtn">
            <i className="ion-trash-b trash" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ListItem;
