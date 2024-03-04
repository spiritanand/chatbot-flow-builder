"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";

function Providers({ children }: { children: React.ReactNode }) {
  function handleDragEnd(event: DragEndEvent) {
    console.log({ event });
  }

  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
}

export default Providers;
