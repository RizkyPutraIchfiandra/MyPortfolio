import type { ComponentType } from "react";

export interface ShapeGridProps {
  speed?: number;
  squareSize?: number;
  direction?: "diagonal" | "up" | "down" | "left" | "right" | string;
  borderColor?: string;
  hoverFillColor?: string;
  shape?: "square" | "circle" | "triangle" | string;
  hoverTrailAmount?: number;
  className?: string;
}

declare const ShapeGrid: ComponentType<ShapeGridProps>;
export default ShapeGrid;
