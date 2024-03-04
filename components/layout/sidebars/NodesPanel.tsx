"use client";

import Draggable from "@/components/DragAndDrop/Draggable";

function NodesPanel() {
  return (
    <aside
      id="nodes-panel"
      className="border-r border-gray-400 h-screen p-4"
      style={{
        height: "calc(100vh - 3.5rem)",
      }}
    >
      <Draggable>Drag me</Draggable>
    </aside>
  );
}

export default NodesPanel;
