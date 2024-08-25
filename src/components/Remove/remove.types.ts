import { ReactNode } from "react";
import { ActionPropTypes } from "../Action/action.types";

export type RemovePropTypes = ActionPropTypes & {
    id: string;
    children?: ReactNode;
};
