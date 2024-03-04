"use client";

import Droppable from "@/components/DragAndDrop/Droppable";

import "reactflow/dist/style.css";
import ReactFlow from "@/components/ReactFlow";

export default function Page() {
  return (
    <main id="main" className="p-4">
      <Droppable>
        <ReactFlow />
      </Droppable>
    </main>
  );
}
