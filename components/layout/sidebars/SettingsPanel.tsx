"use client";

function SettingsPanel() {
  return (
    <aside
      id="settings-panel"
      className="border-l border-gray-400 h-screen overflow-scroll p-4"
      style={{
        height: "calc(100vh - 3.5rem)",
      }}
    >
      Setting of selected node
    </aside>
  );
}

export default SettingsPanel;
