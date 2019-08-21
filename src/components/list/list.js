import React from "react";
import ListItem from "./listItem";

const List = ({ items, delItem, editItem }) => {
  return (
    <div className="list">
      <h2 className="listTitle">List Items</h2>
      {items.map(el => (
        <ListItem
          key={Math.random()}
          text={el}
          delItem={delItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default List;
