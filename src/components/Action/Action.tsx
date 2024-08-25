import React, { forwardRef } from "react";
import classNames from "classnames";
import { ActionPropTypes } from "./action.types";
import styles from "./action.module.scss";

export const Action = forwardRef<HTMLButtonElement, ActionPropTypes>(
    ({ active, className, style, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={classNames(className, styles["action-button"])}
                tabIndex={0}
                {...props}
            />
        );
    }
);
