import { TMenu } from "@/lib/types";
import React from "react";

type TProps = {
  menu: TMenu;
  onClick: () => void;
};

function NodeContextMenu(props: TProps) {
  const { top, left, right, bottom } = props.menu;
  return (
    <div
      className="context-menu absolute p-4 z-40 border-2 border-gray-500 rounded-sm bg-white"
      style={{ top, left, right, bottom }}
      onClick={props.onClick}
    >
      NodeContextMenu {JSON.stringify(props)}
    </div>
  );
}

export default NodeContextMenu;
