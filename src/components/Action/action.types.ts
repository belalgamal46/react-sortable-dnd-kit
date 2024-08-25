import { CSSProperties, HTMLAttributes } from "react";

export type ActionPropTypes = HTMLAttributes<HTMLButtonElement> & {
    active?: {
        fill?: string;
        background?: string;
    };
    cursor?: CSSProperties["cursor"];
};
