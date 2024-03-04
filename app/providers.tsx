"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { DROPPABLE } from "@/lib/constants";
import useStore from "@/store";
import { nanoid } from "nanoid";
import { useId } from "react";
import { Toaster } from "react-hot-toast";

function Providers({ children }: { children: React.ReactNode }) {
  const dndId = useId();

  const { addNode, nodes, edges } = useStore((state) => state);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over, delta } = event;

    if (!over || active.id === over.id) return;

    if (over.id === DROPPABLE) {
      const node = {
        id: nanoid(),
        type: "message",
        data: { label: `Node ${nodes.length + 1}` },
        position: {
          x: Math.max(window.innerWidth + delta.x, 0),
          y: Math.max(delta.y + 15, 0),
        },
      };

      addNode(node);
    }
  }

  return (
    <DndContext id={dndId} onDragEnd={handleDragEnd}>
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          duration: 5000,
        }}
      />
      {children}
    </DndContext>
  );
}

export default Providers;
