import {
  Command,
  CommandDialog,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { TMenu } from "@/lib/types";

type TProps = {
  menu: TMenu;
  onClick: () => void;
};

const items = [
  {
    group: "Text",
    children: [
      { title: "Upper case", value: "UppercaseNode" },
      { title: "Lower case", value: "LowercaseNode" },
    ],
  },
  {
    group: "Data",
    children: [
      { title: "Type Convertion", value: "TypeCConvertionNode" },
      { title: "Search & Replace", value: "SearchAndReplaceNode" },
    ],
  },
];

function NodeContextMenu(props: TProps) {
  return (
    <CommandDialog open={!!props.menu} onOpenChange={props.onClick}>
      <Command>
        <CommandList>
          {items.map((item) => (
            <CommandGroup key={item.group} heading={item.group}>
              {item.children.map((child) => (
                <CommandItem key={child.value}>
                  <div
                    className="w-full"
                    onClick={() => {
                      props.onClick(child.value);
                    }}
                  >
                    {child.title}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}

export default NodeContextMenu;
