import * as React from "react";

const SvgStaff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M369.9 284.81l32.25 18.62a16 16 0 0021.85-5.86l19.54-33.79zM96 304v44.1l60.13-60.1H112a16 16 0 00-16 16z"
      opacity={0.4}
    />
    <path
      d="M512 80v103.86a80 80 0 01-58 76.92l-168.92 48.27a80.11 80.11 0 00-34.62 20.37L74.91 505A24 24 0 0141 505L7 471a24 24 0 010-33.9L156.13 288l26.48-26.48a176.06 176.06 0 0176.11-44.78L416 171.8V96h-50.32l-11.58 23.15a16 16 0 01-21.46 7.16l-57.26-28.63a16 16 0 01-7.15-21.46l16-32A80 80 0 01355.78 0H432a80 80 0 0180 80z"
      className="staff_svg__fa-primary"
    />
  </svg>
);

SvgStaff.displayName = "SvgStaff";
SvgStaff.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStaff;
