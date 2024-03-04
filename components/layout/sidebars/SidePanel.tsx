"use client";

import useStore from "@/store";
import SettingsPanel from "@/components/layout/sidebars/SettingsPanel";
import NodesPanel from "@/components/layout/sidebars/NodesPanel";

function SidePanel() {
  const { activeNode } = useStore((state) => state);

  // If there is an active node, show the settings panel else show the nodes panel
  // This is the sidebar that shows the settings for the active node
  return (
    <aside
      id="side-panel"
      className="border-l border-gray-400 h-screen p-4"
      style={{
        height: "calc(100vh - 3.5rem)",
      }}
    >
      {activeNode ? <SettingsPanel /> : <NodesPanel />}
    </aside>
  );
}

export default SidePanel;
