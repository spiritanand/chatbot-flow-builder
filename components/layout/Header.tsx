"use client";

import { Button } from "@/components/ui/button";
import useStore from "@/store";
import toast from "react-hot-toast";

function Header() {
  const { nodes, edges } = useStore((state) => state);

  // Validate the flow before saving
  function handleSave() {
    // If there are nodes but not enough edges, show an error
    if (nodes.length > 0 && edges.length !== nodes.length - 1) {
      toast.error("Please connect all nodes. Cannot save incomplete flow.");

      return;
    }

    toast.success("Flow saved successfully!");
  }

  return (
    <nav className="h-14 flex items-center border-b border-gray-400 px-6 justify-end">
      <Button className="font-bold text-lg" onClick={handleSave}>
        Save Changes
      </Button>
    </nav>
  );
}

export default Header;
