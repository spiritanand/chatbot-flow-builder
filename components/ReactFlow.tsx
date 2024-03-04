"use client";

import React, { useMemo } from "react";
import ReactFlow, { Controls } from "reactflow";

import useStore from "@/store";
import { Message } from "@/components/Nodes/Message";

export default function App() {
  const nodeTypes = useMemo(() => ({ message: Message }), []);

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    (state) => state,
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
        // @ts-ignore
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
