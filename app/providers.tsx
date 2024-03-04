"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { DROPPABLE } from "@/lib/constants";
import useStore from "@/store";
import { nanoid } from "nanoid";

function Providers({ children }: { children: React.ReactNode }) {
  const { addNode, nodes, edges } = useStore((state) => state);

  console.log({ edges });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    if (over.id === DROPPABLE) {
      const node = {
        id: nanoid(),
        type: "message",
        data: { label: `Node ${nodes.length + 1}` },
        position: {
          x: 0,
          y: 0,
        },
      };

      addNode(node);
    }
  }

  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
}

export default Providers;
