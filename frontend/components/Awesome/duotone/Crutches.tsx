import * as React from "react";

const SvgCrutches = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M635.28 185.7l-181-181a16 16 0 00-22.62 0L409 27.3a16 16 0 000 22.63l181 181a16 16 0 0022.63 0l22.62-22.63a16 16 0 00.03-22.6zm-128 276.36L441 395.75a128 128 0 01-33.67 13L371.71 417 462 507.31a16 16 0 0022.63 0l22.62-22.63a16 16 0 000-22.62zM231 49.93a16 16 0 000-22.62L208.3 4.68a16 16 0 00-22.62 0l-181 181a16 16 0 000 22.62l22.6 22.7a16 16 0 0022.63 0l11.32-11.31 132.29 132.24c.68.68 1.57 1.06 2.27 1.71l9.69-9.69 13.22-57.32-112.22-112.24 67.89-67.89 78.75 78.75a128.23 128.23 0 0112.29-14.34L297.34 139l-77.72-77.75z"
      opacity={0.4}
    />
    <path
      d="M510.84 197l-55.1 55.12-67.89-67.89 55.1-55.1-45.25-45.26L288 193.54a96.13 96.13 0 00-25.67 46.29l-27.71 120.26-102 102a16 16 0 000 22.63l22.62 22.62a16 16 0 0022.63 0l102-102 120.25-27.75a95.85 95.85 0 0046.29-25.65l109.68-109.68zM401.17 306.68a31.94 31.94 0 01-15.45 8.54l-79.3 18.32 18.3-79.3a32.31 32.31 0 018.56-15.45l9.31-9.31 67.89 67.89z"
      className="crutches_svg__fa-primary"
    />
  </svg>
);

SvgCrutches.displayName = "SvgCrutches";
SvgCrutches.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCrutches;