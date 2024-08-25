import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    MeasuringStrategy,
    MouseSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { FC, useEffect } from "react";
import DraggableItem from "../DraggableItem/DraggableItem";
import { SortableItemsPropsTypes, TreeItems } from "./sortableTree.types";
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import styles from "./sortableTree.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/sotre";
import {
    moveItem,
    setActiveItemId,
    setItems,
} from "../../redux/treeData/treeDataSlice";

const initialItems: TreeItems = [
    {
        id: "1",
        title: "Item 1",
        collapsed: false,
    },
    {
        id: "2",
        title: "Item 2",
        collapsed: false,
        children: [
            {
                id: "child-1",
                title: "child Item 1",
                collapsed: false,
            },
        ],
    },
];

const SortableTree: FC<SortableItemsPropsTypes> = ({
    dragOverlay = true,
    node,
    treeData = initialItems,
    dragHandle = false,
    dragHandleIcon,
    draggableContainerClassName,
    draggableContainerDragOverlayClassName,
    removable,
    collapsible,
}) => {
    const items = useSelector((state: RootState) => state.treeData.treeData);
    const activeItemId = useSelector(
        (state: RootState) => state.treeData.activeItemId
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setItems(treeData));
    }, [treeData]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            scrollBehavior: "Cypress" in window ? "auto" : undefined,
            coordinateGetter: sortableKeyboardCoordinates,
        }),
        useSensor(MouseSensor),
        useSensor(TouchSensor)
    );

    const handleDragStart = ({ active }: DragStartEvent) => {
        dispatch(setActiveItemId(active.id.toString()));
    };

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        dispatch(setActiveItemId(""));

        if (over && active.id !== over.id) {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);
            dispatch(moveItem({ oldIndex, newIndex }));
        }
    };

    const draggedItem = items.find((item) => item.id === activeItemId);

    return (
        <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
            measuring={{
                droppable: {
                    strategy: MeasuringStrategy.Always,
                },
            }}
        >
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
            >
                <ul className={styles["sortable-tree"]}>
                    {items.map((item) => (
                        <div key={item.id}>
                            <DraggableItem
                                id={item.id}
                                dragHandle={dragHandle}
                                key={item.id}
                                removable={removable}
                                collapsible={collapsible}
                                dragHandleIcon={dragHandleIcon}
                                draggableContainerClassName={classNames(
                                    draggableContainerClassName,
                                    styles["sortable-tree__item"],
                                    "sortable-tree__item"
                                )}
                            >
                                {node ? (
                                    <>
                                        {node({
                                            ...item,
                                            id: item.id,
                                            title: item.title,
                                            collapsed: item.collapsed,
                                            children: item.children,
                                        })}
                                    </>
                                ) : (
                                    <div
                                        className={
                                            styles["draggable-item__body"]
                                        }
                                    >
                                        {item.title}
                                    </div>
                                )}
                            </DraggableItem>
                        </div>
                    ))}
                </ul>
            </SortableContext>
            {dragOverlay && activeItemId && draggedItem && (
                <DragOverlay>
                    <DraggableItem
                        id={draggedItem.id}
                        dragHandle={dragHandle}
                        dragHandleIcon={dragHandleIcon}
                        draggableContainerClassName={classNames(
                            draggableContainerDragOverlayClassName,
                            styles["draggable-item--is-dragging"]
                        )}
                    >
                        {node
                            ? node({
                                  id: draggedItem.id,
                                  title: draggedItem.title,
                                  collapsed: draggedItem.collapsed,
                                  children: draggedItem.children,
                              })
                            : draggedItem.title}
                    </DraggableItem>
                </DragOverlay>
            )}
        </DndContext>
    );
};

export default SortableTree;
