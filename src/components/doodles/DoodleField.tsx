import type { ComponentType } from "react";

export type DoodleSpec = {
  Icon: ComponentType<{ className?: string }>;
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate?: number;
  opacity?: number;
  flip?: boolean;
  colorClassName?: string;
};

export function DoodleField({ items }: { items: DoodleSpec[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((item, i) => {
        const { Icon } = item;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              width: item.size,
              opacity: item.opacity ?? 0.5,
              transform: `rotate(${item.rotate ?? 0}deg) ${
                item.flip ? "scaleX(-1)" : ""
              }`,
            }}
          >
            <Icon className={item.colorClassName ?? "text-ash"} />
          </div>
        );
      })}
    </div>
  );
}
