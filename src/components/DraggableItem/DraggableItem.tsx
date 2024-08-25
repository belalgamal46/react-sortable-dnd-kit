import { CSS } from "@dnd-kit/utilities";
import { FC, useState } from "react";
import { DraggableItemPropsTypes } from "./draggableItem.types";
import { useSortable } from "@dnd-kit/sortable";
import Handle from "../Handle/Handle";
import styles from "./draggableItem.module.scss";
import classNames from "classnames";
import Remove from "../Remove/Remove";
import Collapsible from "../Collapsible/Collapsible";

const DraggableItem: FC<DraggableItemPropsTypes> = ({
    id,
    children,
    draggableContainerClassName,
    dragHandle,
    dragHandleIcon,
    removable,
    collapsible,
    isCollapsed = false,
    ...rest
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging,
        transition,
    } = useSortable({
        id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <li
            {...rest}
            ref={setNodeRef}
            className={classNames(
                draggableContainerClassName,
                styles["draggable-item"],
                isDragging && styles["draggable-item--is-dragging"]
            )}
            style={style}
            {...(dragHandle ? {} : listeners)}
            {...(dragHandle ? {} : attributes)}
        >
            {collapsible && (
                <Collapsible
                    style={{ position: "relative" }}
                    isCollapsed={isCollapsed}
                    id={id}
                    {...rest}
                />
            )}
            {dragHandle && (
                <Handle
                    className={styles["draggable-item__handle"]}
                    {...listeners}
                    {...attributes}
                >
                    {dragHandleIcon}
                </Handle>
            )}

            {children}
            {removable && <Remove id={id} />}
        </li>
    );
};

export default DraggableItem;
