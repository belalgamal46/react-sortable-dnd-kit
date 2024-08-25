import { FC } from "react";
import { SvgPropsTypes } from "./SvgProps";

const MinusCollapse: FC<Omit<SvgPropsTypes, "fill">> = ({
    width = "17",
    height = "16",
    stroke = "#263238",
    ...rest
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 17 16"
            fill="none"
            {...rest}
        >
            <g clipPath="url(#clip0_4683_14713)">
                <mask
                    id="mask0_4683_14713"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="17"
                    height="16"
                >
                    <path
                        d="M0.5 0.001791H16.5V16.001H0.5V0.001791Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask0_4683_14713)">
                    <path
                        d="M6.04947 7.99745H10.9661M5.14444 0.622821H11.8712C12.8658 0.622821 13.8196 1.01789 14.5228 1.72111L14.7844 1.98275C15.4877 2.68594 15.8828 3.63973 15.8828 4.63424V11.3606C15.8828 12.3552 15.4877 13.309 14.7844 14.0121L14.5228 14.2738C13.8196 14.977 12.8658 15.3721 11.8712 15.3721H5.14444C4.14988 15.3721 3.19603 14.977 2.49278 14.2738L2.23113 14.0121C1.52787 13.309 1.13281 12.3552 1.13281 11.3606V4.63424C1.13281 3.63973 1.52787 2.68594 2.23113 1.98275L2.49278 1.72111C3.19603 1.01789 4.14988 0.622821 5.14444 0.622821Z"
                        stroke={stroke}
                        strokeWidth="1.24997"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_4683_14713">
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

export default MinusCollapse;
