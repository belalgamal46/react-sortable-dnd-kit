import { UniqueIdentifier } from "@dnd-kit/core";
import { TreeItems } from "../../components/SortableTree/sortableTree.types";

export type InitialStateTypes = {
    treeData: TreeItems;
    activeItemId: UniqueIdentifier;
};
