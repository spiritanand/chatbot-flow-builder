"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { DROPPABLE } from "@/lib/constants";
import useStore from "@/store";
import { nanoid } from "nanoid";
import { useId } from "react";

function Providers({ children }: { children: React.ReactNode }) {
  const dndId = useId();

  const { addNode, nodes, edges } = useStore((state) => state);

  function handleDragEnd(event: DragEndEvent) {
    console.log({ event });
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    if (over.id === DROPPABLE) {
      const node = {
        id: nanoid(),
        type: "message",
        data: { label: `Node ${nodes.length + 1}` },
        position: {
          x: 25,
          y: 25,
        },
      };

      addNode(node);
    }
  }

  return (
    <DndContext id={dndId} onDragEnd={handleDragEnd}>
      {children}
    </DndContext>
  );
}

export default Providers;
