import React, { FC } from "react";
import { SvgPropsTypes } from "./EditIcon";

const AddCollapse: FC<SvgPropsTypes> = ({
    width = "17",
    height = "16",
    fill = "#263238",
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 15 16" fill={fill}>
            <g clip-path="url(#clip0_4683_15051)">
                <path
                    d="M12.5 1.33333C13.9707 1.33333 15.1667 2.52933 15.1667 4V12C15.1667 13.4707 13.9707 14.6667 12.5 14.6667H4.5C3.02933 14.6667 1.83333 13.4707 1.83333 12V4C1.83333 2.52933 3.02933 1.33333 4.5 1.33333H12.5ZM12.5 0H4.5C2.29067 0 0.5 1.79067 0.5 4V12C0.5 14.2093 2.29067 16 4.5 16H12.5C14.7093 16 16.5 14.2093 16.5 12V4C16.5 1.79067 14.7093 0 12.5 0Z"
                    fill={fill}
                />
                <path
                    d="M8.49967 12C8.13167 12 7.83301 11.702 7.83301 11.3333V4.66667C7.83301 4.29867 8.13167 4 8.49967 4C8.86767 4 9.16634 4.29867 9.16634 4.66667V11.3333C9.16634 11.702 8.86767 12 8.49967 12Z"
                    fill={fill}
                />
                <path
                    d="M4.5 8.00004C4.5 7.63204 4.798 7.33337 5.16667 7.33337H11.8333C12.2013 7.33337 12.5 7.63204 12.5 8.00004C12.5 8.36804 12.2013 8.66671 11.8333 8.66671H5.16667C4.798 8.66671 4.5 8.36804 4.5 8.00004Z"
                    fill={fill}
                />
            </g>
            <defs>
                <clipPath id="clip0_4683_15051">
                    <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default AddCollapse;
