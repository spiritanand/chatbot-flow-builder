import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export function Message() {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}
