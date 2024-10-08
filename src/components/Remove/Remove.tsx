import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/sotre";
import { Action } from "../Action/Action";
import { RemovePropTypes } from "./remove.types";
import { TreeItem } from "../SortableTree/sortableTree.types";
import { removeAtIndex } from "../../utilities/utilities";
import { setItems } from "../../redux/treeData/treeDataSlice";

const Remove = ({ id, children, ...rest }: RemovePropTypes) => {
    const items = useSelector((state: RootState) => state.treeData.treeData);
    const dispatch = useDispatch();

    const handleRemoveClick = () => {
        const indexOfItemToRemove = items.findIndex((item) => item.id === id);
        const newItems = removeAtIndex<TreeItem>(items, indexOfItemToRemove);
        dispatch(setItems(newItems));
    };

    return (
        <Action onClick={handleRemoveClick} {...rest}>
            {children || (
                <svg
                    width="20"
                    height="19"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.583 4.0835C11.4283 4.0835 11.2799 4.14495 11.1705 4.25435C11.0611 4.36375 10.9997 4.51212 10.9997 4.66683V11.1949C10.9829 11.4899 10.8503 11.7663 10.6307 11.964C10.4111 12.1616 10.1223 12.2645 9.82717 12.2502H5.17217C4.87706 12.2645 4.58825 12.1616 4.36864 11.964C4.14902 11.7663 4.01641 11.4899 3.99967 11.1949V4.66683C3.99967 4.51212 3.93822 4.36375 3.82882 4.25435C3.71942 4.14495 3.57105 4.0835 3.41634 4.0835C3.26163 4.0835 3.11326 4.14495 3.00386 4.25435C2.89447 4.36375 2.83301 4.51212 2.83301 4.66683V11.1949C2.84966 11.7994 3.10518 12.3726 3.54361 12.7891C3.98204 13.2055 4.56765 13.4313 5.17217 13.4168H9.82717C10.4317 13.4313 11.0173 13.2055 11.4557 12.7891C11.8942 12.3726 12.1497 11.7994 12.1663 11.1949V4.66683C12.1663 4.51212 12.1049 4.36375 11.9955 4.25435C11.8861 4.14495 11.7377 4.0835 11.583 4.0835Z"
                        fill="#DE3A3A"
                    />
                    <path
                        d="M12.1667 2.3335H9.83333V1.16683C9.83333 1.01212 9.77187 0.863747 9.66248 0.75435C9.55308 0.644954 9.40471 0.583496 9.25 0.583496H5.75C5.59529 0.583496 5.44692 0.644954 5.33752 0.75435C5.22812 0.863747 5.16667 1.01212 5.16667 1.16683V2.3335H2.83333C2.67862 2.3335 2.53025 2.39495 2.42085 2.50435C2.31146 2.61375 2.25 2.76212 2.25 2.91683C2.25 3.07154 2.31146 3.21991 2.42085 3.32931C2.53025 3.4387 2.67862 3.50016 2.83333 3.50016H12.1667C12.3214 3.50016 12.4697 3.4387 12.5791 3.32931C12.6885 3.21991 12.75 3.07154 12.75 2.91683C12.75 2.76212 12.6885 2.61375 12.5791 2.50435C12.4697 2.39495 12.3214 2.3335 12.1667 2.3335ZM6.33333 2.3335V1.75016H8.66667V2.3335H6.33333Z"
                        fill="#DE3A3A"
                    />
                    <path
                        d="M6.91667 9.91667V5.83333C6.91667 5.67862 6.85521 5.53025 6.74581 5.42085C6.63642 5.31146 6.48804 5.25 6.33333 5.25C6.17862 5.25 6.03025 5.31146 5.92085 5.42085C5.81146 5.53025 5.75 5.67862 5.75 5.83333V9.91667C5.75 10.0714 5.81146 10.2197 5.92085 10.3291C6.03025 10.4385 6.17862 10.5 6.33333 10.5C6.48804 10.5 6.63642 10.4385 6.74581 10.3291C6.85521 10.2197 6.91667 10.0714 6.91667 9.91667Z"
                        fill="#DE3A3A"
                    />
                    <path
                        d="M9.24967 9.91667V5.83333C9.24967 5.67862 9.18822 5.53025 9.07882 5.42085C8.96942 5.31146 8.82105 5.25 8.66634 5.25C8.51163 5.25 8.36326 5.31146 8.25386 5.42085C8.14447 5.53025 8.08301 5.67862 8.08301 5.83333V9.91667C8.08301 10.0714 8.14447 10.2197 8.25386 10.3291C8.36326 10.4385 8.51163 10.5 8.66634 10.5C8.82105 10.5 8.96942 10.4385 9.07882 10.3291C9.18822 10.2197 9.24967 10.0714 9.24967 9.91667Z"
                        fill="#DE3A3A"
                    />
                </svg>
            )}
        </Action>
    );
};

export default Remove;
