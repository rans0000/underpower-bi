import {
  addEdge,
  Background,
  Controls,
  Edge,
  Node,
  NodeMouseHandler,
  OnConnect,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import React, { useCallback, useRef, useState } from "react";

import "@xyflow/react/dist/style.css";
import OriginalDataNode from "./nodes/original-data-node";
import UppercaseNode from "./nodes/uppercase-node";
import NodeContextMenu from "./node-context-menu";
import { TMenu } from "@/lib/types";

const nodeTypes = { OriginalDataNode, UppercaseNode };
let last = 0;

const initialNodes: Node[] = [
  {
    id: "1000",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "OriginalDataNode",
  },
];
const initialEdges: Edge[] = [];

function TransformedDataNodeGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodeChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgeChange] = useEdgesState(initialEdges);
  const [menu, setMenu] = useState<TMenu | null>(null);
  const { addNodes } = useReactFlow();

  const onConnect: OnConnect = useCallback(
    (params) => {
      setEdges((edg) => addEdge(params, edg));
    },
    [setEdges]
  );

  const onContextMenu: NodeMouseHandler = useCallback(
    (event, node) => {
      event.preventDefault();
      if (node.type !== "OriginalDataNode" || !ref.current) return;

      const pane = ref.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: (event.clientY < pane.height - 200 && event.clientY) || undefined,
        left: (event.clientX < pane.width - 200 && event.clientX) || undefined,
        right:
          (event.clientX >= pane.width - 200 && pane.width - event.clientX) ||
          undefined,
        bottom:
          (event.clientY >= pane.height - 200 && pane.height - event.clientY) ||
          undefined,
      });
    },

    [setMenu]
  );

  const onMenuClick = useCallback(
    (type?: string) => {
      switch (type) {
        case "UppercaseNode":
          const node: Node = {
            id: `${++last}`,
            position: { x: 100, y: 100 },
            data: { label: "Uppercase" },
            type: "UppercaseNode",
          };

          addNodes(node);
          break;

        default:
          break;
      }
      setMenu(null);
    },
    [setMenu]
  );

  return (
    <section className="transformed-data-node-graph w-full h-full">
      {false && setNodes}
      <ReactFlow
        // fitView
        ref={ref}
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgeChange}
        onConnect={onConnect}
        onNodeContextMenu={onContextMenu}
      >
        <Controls />
        <Background gap={12} size={1} />
        {menu && <NodeContextMenu menu={menu} onClick={onMenuClick} />}
      </ReactFlow>
    </section>
  );
}

export default TransformedDataNodeGraph;
