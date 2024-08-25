import EditIcon from "./assets/icons/EditIcon";
import { Remove, SortableTree } from "./components";
import styles from "./styles.module.scss";

const treeData = [
    {
        id: "1",
        title: "Item 1",
        collapsed: false,
    },
    {
        id: "3",
        title: "Item 3",
        collapsed: false,
    },
    {
        id: "4",
        title: "Item 4",
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
            {
                id: "child-2",
                title: "child Item 2",
                collapsed: false,
            },
            {
                id: "child-3",
                title: "child Item 3",
                collapsed: false,
            },
        ],
    },
];

function App() {
    return (
        <div style={{padding: 50}}>
            <SortableTree
                treeData={treeData}
                dragHandle
                collapsible
                node={({ id, title }) => {
                    return (
                        <div className={styles["draggable-item"]} key={id}>
                            <span>{title}</span>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                }}
                            >
                                <button
                                    style={{
                                        padding: 0,
                                        background: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        console.log("Edit button clicked")
                                    }
                                >
                                    <EditIcon width="19" height="18" />
                                </button>
                                <Remove
                                    className={
                                        styles["draggable-item__remove-button"]
                                    }
                                    id={id}
                                />
                            </div>
                        </div>
                    );
                }}
            />
        </div>
    );
}

export default App;
