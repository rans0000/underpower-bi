import {
  addEdge,
  Background,
  Controls,
  Edge,
  Node,
  OnConnect,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useCallback } from "react";

import "@xyflow/react/dist/style.css";
import OriginalDataNode from "./nodes/original-data-node";

const nodeTypes = { OriginalDataNode };

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "OriginalDataNode",
  },
];
const initialEdges: Edge[] = [];

function TransformedDataNodeGraph() {
  const [nodes, setNodes, onNodeChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgeChange] = useEdgesState(initialEdges);
  console.log(setNodes);

  const onConnect: OnConnect = useCallback(
    (params) => {
      setEdges((edg) => addEdge(params, edg));
    },
    [setEdges]
  );

  return (
    <section className="transformed-data-node-graph w-full h-full">
      <ReactFlow
        // fitView
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgeChange}
        onConnect={onConnect}
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
    </section>
  );
}

export default TransformedDataNodeGraph;
