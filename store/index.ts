import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "reactflow";
import { createWithEqualityFn } from "zustand/traditional";

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: Node) => void;
  setEdges: (edges: Edge[]) => void;
};

const useStore = createWithEqualityFn<RFState>((set, get) => ({
  nodes: [] as Node[],
  edges: [] as Edge[],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    console.log({ changes });

    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    console.log({ connection });

    set({
      edges: addEdge(connection, get().edges),
    });
  },
  addNode: (node: Node) => {
    set(({ nodes }) => ({ nodes: [...nodes, node] }));
  },
  setEdges: (edges: Edge[]) => {
    console.log({ edges });
    set({ edges });
  },
}));

export default useStore;
