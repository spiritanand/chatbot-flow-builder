"use client";

import useStore from "@/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

function SettingsPanel() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { activeNode, updateLabel, setActiveNode } = useStore((state) => state);

  const [message, setMessage] = useState(activeNode?.data.label || "");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!activeNode || !message.trim()) return;

    updateLabel(activeNode.id, message);
    setActiveNode(null);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setMessage(activeNode?.data.label || "");
  }, [activeNode?.data.label]);

  // Form to update the label/message of the active node
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Label
        htmlFor="message"
        className="text-lg font-bold flex gap-5 items-center"
      >
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setActiveNode(null);
          }}
          className="p-0"
        >
          <ArrowLeftIcon className="text-primary" width={25} height={25} />
        </Button>
        Text
      </Label>
      <Input
        ref={inputRef}
        type="text"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}

export default SettingsPanel;
