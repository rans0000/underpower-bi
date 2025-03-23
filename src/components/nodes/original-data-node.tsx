import { TDataList } from "@/lib/types";
import { Handle, Position } from "@xyflow/react";

const oData: TDataList = {
  headers: [
    { label: "title", selected: true },
    { label: "count", selected: true },
    { label: "client", selected: true },
  ],
  data: [
    { title: "Amazon", count: 3, client: "A" },
    { title: "Flipkart", count: 5, client: "B" },
  ],
};

function OriginalDataNode() {
  return (
    <div className="original-data-node flex flex-col p-2 gap-2 border-2 rounded-sm">
      <h1>Original</h1>
      <div className="handle-wrapper flex flex-col gap-3 justify-around">
        {oData?.headers.map((header) => (
          <div className="handle-box relative" key={header.label}>
            <label
              htmlFor={header.label}
              className="pointer-events-none pe-2 align-middle text-right block"
            >
              {header.label}
            </label>
            <Handle
              id={header.label}
              type="source"
              position={Position.Right}
              className="!w-2 !h-2 !border-none"
            ></Handle>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OriginalDataNode;
