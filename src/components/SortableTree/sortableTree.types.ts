import { FC, ReactNode } from "react";
import { DraggableItemPropsTypes } from "../DraggableItem/draggableItem.types";

export type TreeItem = {
    id: string;
    title: string;
    collapsed?: boolean;
    children?: TreeItem[];
};

export type TreeItems = TreeItem[];

export type SortableItemsPropsTypes = {
    dragOverlay?: boolean;
    treeData: TreeItems;
    node?: (props: TreeItem) => ReactNode;
    dragHandle?: boolean;
    dragHandleIcon?: ReactNode;
    draggableContainerClassName?: string;
    draggableContainerDragOverlayClassName?: string;
    removable?: boolean;
    collapsible?: boolean;
};
