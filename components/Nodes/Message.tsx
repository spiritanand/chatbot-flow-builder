import { Handle, Position } from "reactflow";
import useStore from "@/store";

export type NodeProps = {
  id: string;
  data: { label: string };
  dragHandle?: boolean;
  type?: string;
  selected?: boolean;
  isConnectable?: boolean;
  zIndex?: number;
  xPos: number;
  yPos: number;
  dragging: boolean;
  targetPosition?: Position;
  sourcePosition?: Position;
};

export function Message(props: NodeProps) {
  const { data, id } = props;

  const { setActiveNode } = useStore((state) => state);

  return (
    <div
      className="bg-white p-4 focus:bg-red-500 rounded-lg shadow-md"
      onDoubleClick={() => {
        setActiveNode(id);
      }}
    >
      <div>
        <Handle type="target" position={Position.Left} className="w-3 h-3" />
        <p>{data.label}</p>
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          className="w-3 h-3"
        />
      </div>
    </div>
  );
}
