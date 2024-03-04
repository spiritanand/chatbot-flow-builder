"use client";

import Draggable from "@/components/DragAndDrop/Draggable";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import Droppable from "@/components/DragAndDrop/Droppable";

function Providers({ children }: { children: React.ReactNode }) {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragEnd(event: DragEndEvent) {
    console.log({ event });

    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
      {children}
    </DndContext>
  );
}

export default Providers;
