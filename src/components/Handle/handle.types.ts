import { ActionPropTypes } from "../Action/action.types";

export type HandlePropTypes = ActionPropTypes & {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    fill?: string;
};
