import { ButtonHTMLAttributes, FC } from "react";
import { Action } from "../Action/Action";
import MinusCollapse from "../../assets/icons/MinusCollapse";
import AddCollapse from "../../assets/icons/AddCollapse";
import styles from "./collapsible.module.scss";
import classNames from "classnames";

const Collapsible: FC<
    ButtonHTMLAttributes<HTMLElement> & { isCollapsed: boolean; id: string }
> = ({ children, isCollapsed, className, ...rest }) => {
    const handleCollapse = () => {};
    return (
        <Action
            className={classNames(styles["collapsible"], className)}
            onClick={handleCollapse}
            {...rest}
        >
            {isCollapsed ? (
                <div className={styles["collapsible__icon-container"]}>
                    <AddCollapse width="16" />
                </div>
            ) : (
                <div className={styles["collapsible__icon-container"]}>
                    <MinusCollapse width="16" />
                </div>
            )}
        </Action>
    );
};

export default Collapsible;
