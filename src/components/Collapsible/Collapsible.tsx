import { ButtonHTMLAttributes, FC, useEffect, useRef, useState } from "react";
import { Action } from "../Action/Action";
import MinusCollapse from "../../assets/icons/MinusCollapse";
import AddCollapse from "../../assets/icons/AddCollapse";
import styles from "./collapsible.module.scss";
import classNames from "classnames";

const Collapsible: FC<
    ButtonHTMLAttributes<HTMLElement> & {
        isCollapsed: boolean;
        id: string;
    }
> = ({ children, isCollapsed, className, ...rest }) => {
    const handleCollapse = () => {};

    return (
        <Action
            className={classNames(styles["collapsible"], className)}
            onClick={handleCollapse}
            {...rest}
        >
            {isCollapsed ? (
                <>
                    <div
                        className={styles["collapsible__icon-container"]}
                    ></div>
                    <AddCollapse />
                </>
            ) : (
                <>
                    <div
                        className={classNames(
                            styles["collapsible__icon-container"],
                            "collapsible__icon-container"
                        )}
                    ></div>
                    <MinusCollapse width={18} />
                </>
            )}
        </Action>
    );
};

export default Collapsible;
