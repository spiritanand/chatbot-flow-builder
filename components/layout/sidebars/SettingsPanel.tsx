"use client";

import useStore from "@/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function SettingsPanel() {
  const { activeNode, updateMessage, setActiveNode } = useStore(
    (state) => state,
  );

  const [message, setMessage] = useState(activeNode?.data.label || "");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!activeNode || !message.trim()) return;

    updateMessage(activeNode.id, message);
    setActiveNode(null);
  }

  useEffect(() => {
    setMessage(activeNode?.data.label || "");
  }, [activeNode?.data.label]);

  return (
    <aside
      id="settings-panel"
      className="border-l border-gray-400 h-screen overflow-scroll p-4 flex justify-center"
      style={{
        height: "calc(100vh - 3.5rem)",
      }}
    >
      {activeNode ? (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Label htmlFor="message" className="text-lg font-bold">
            Text
          </Label>
          <Input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit">Save</Button>
        </form>
      ) : (
        <p className="text-sm font-bold">Select a node to view settings</p>
      )}
    </aside>
  );
}

export default SettingsPanel;
