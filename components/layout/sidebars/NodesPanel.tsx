"use client";

import Draggable from "@/components/DragAndDrop/Draggable";
import { NODE } from "@/lib/constants";

const Nodes = [
  {
    id: NODE.MESSAGE.id,
    type: NODE.MESSAGE.type,
    label: NODE.MESSAGE.label,
  },
];

function NodesPanel() {
  return (
    <>
      <h4 className="text-2xl font-black text-center pb-3 border-b border-b-primary mb-5 text-primary">
        Nodes
      </h4>
      <ul className="flex items-center justify-center">
        {Nodes.map((node) => (
          <Draggable key={node.id} id={node.id}>
            <p className="text-lg hover:font-bold transition-all">
              {node.label}
            </p>
          </Draggable>
        ))}
      </ul>
    </>
  );
}

export default NodesPanel;
