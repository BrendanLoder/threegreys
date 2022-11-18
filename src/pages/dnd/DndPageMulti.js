import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

import Builder from "./Builder";
import "./dndStyles.css";
import {
    MultiBackend,
    DndProvider,
    TouchTransition,
    MouseTransition,
    Preview
} from "react-dnd-multi-backend";

import Item from "./Item";

export const HTML5toTouch = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
      transition: MouseTransition
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition
    }
  ]
};

export const generatePreview = (props) => {
  const { item, style } = props;
  const newStyle = {
    ...style
  };

  return (
    <div style={newStyle}>
      <Item {...item} />
    </div>
  );
};

export default function DndPageMulti() {
  return (
    <div className="DndPageMultiCssClass">
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        {/* <Preview>{generatePreview}</Preview> */}
        <Builder />
      </DndProvider>
    </div>
  );
}