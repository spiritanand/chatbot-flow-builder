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
  activeNode: Node | null;
  setActiveNode: (nodeId: string | null) => void;
  updateLabel: (nodeId: string, message: string) => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: Node) => void;
  setEdges: (edges: Edge[]) => void;
};

// Store to manage the state of the flow
const useStore = createWithEqualityFn<RFState>((set, get) => ({
  nodes: [] as Node[],
  edges: [] as Edge[],
  activeNode: null,
  setActiveNode: (nodeId: string | null) => {
    if (!nodeId) set({ activeNode: null });

    set(({ nodes }) => ({
      activeNode: nodes.find((node) => node.id === nodeId),
    }));
  },
  updateLabel: (nodeId: string, message: string) => {
    set(({ nodes }) => {
      const node = nodes.find((node) => node.id === nodeId);

      if (!node) return { nodes };

      node.data = {
        ...node.data,
        label: message,
      };

      return {
        nodes: [...nodes],
      };
    });
  },
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    // Prevent self-connections
    if (connection.source === connection.target) return;

    if (
      get().edges.some(
        (edge) =>
          // Prevent new connection from same source
          edge.source === connection.source ||
          // Prevent reverse connections
          (edge.source === connection.target &&
            edge.target === connection.source),
      )
    )
      return;

    set(({ edges }) => {
      return {
        edges: addEdge(connection, get().edges),
      };
    });
  },
  addNode: (node: Node) => {
    set(({ nodes }) => ({ nodes: [...nodes, node] }));
  },
  setEdges: (edges: Edge[]) => {
    set({ edges });
  },
}));

export default useStore;
