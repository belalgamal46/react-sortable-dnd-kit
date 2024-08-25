import { SVGAttributes } from "react";

export type SvgPropsTypes = SVGAttributes<SVGSVGElement> & {
    width?: string | number;
    height?: string | number;
    fill?: string;
    stroke?: string;
    className?: string;
};
