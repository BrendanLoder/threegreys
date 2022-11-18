import React, { useEffect } from "react";
import { useDrag } from "react-dnd";

const LeftPanelItem = ({ itemType, onClick, onNewItemAdding }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: itemType,
    item: { type: itemType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  useEffect(() => {
    onNewItemAdding(isDragging);
  }, [isDragging, onNewItemAdding]);

  return (
    <div ref={dragRef}>
      <button
        type="button"
        onClick={onClick}
        style={{
          background: "blue",
          color: "#fff",
          padding: "20px",
          margin: "10px",
          border: "none"
        }}
      >
        {itemType}
      </button>
    </div>
  );
};

export default LeftPanelItem;