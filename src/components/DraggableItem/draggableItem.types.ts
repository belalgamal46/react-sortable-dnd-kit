import { LiHTMLAttributes, ReactNode } from "react";

export type DraggableItemPropsTypes = LiHTMLAttributes<HTMLLIElement> & {
    id: string;
    children: ReactNode;
    draggableContainerClassName?: string;
    dragHandle?: boolean;
    dragHandleIcon?: ReactNode;
    removable?: boolean;
    collapsible?: boolean;
    isCollapsed?: boolean;
};
