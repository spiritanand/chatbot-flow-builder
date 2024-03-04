"use client";

import ReactFlow from "reactflow";
import Droppable from "@/components/DragAndDrop/Droppable";

export default function Page() {
  return (
    <main id="main" className="p-4">
      <Droppable>
        <ReactFlow />
      </Droppable>
    </main>
  );
}
