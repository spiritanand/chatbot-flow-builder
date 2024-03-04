"use client";

import React, { useMemo } from "react";
import ReactFlow, { Controls } from "reactflow";

import useStore, { RFState } from "@/store";
import { shallow } from "zustand/shallow";
import { Message } from "@/components/Nodes/Message";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export default function App() {
  const nodeTypes = useMemo(() => ({ message: Message }), []);

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    selector,
    shallow,
  );

  return (
    <div
      className="bg-gray-300"
      style={{
        height: "calc(100vh - 3.5rem)",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
