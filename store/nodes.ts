import { Node } from "reactflow";

export default [
  {
    id: "1",
    type: "input",
    data: { label: "Input" },
    position: {
      x: 10,
      y: 25,
    },
  },
  {
    id: "2",
    data: { label: "Default" },
    position: {
      x: 20,
      y: 125,
    },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output" },
    position: {
      x: 30,
      y: 250,
    },
  },
] as Node[];
