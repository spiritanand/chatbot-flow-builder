"use client";

import Droppable from "@/components/DragAndDrop/Droppable";

import ReactFlow from "@/components/ReactFlow";

export default function Page() {
  return (
    <main id="main">
      <Droppable>
        <ReactFlow />
      </Droppable>
    </main>
  );
}
