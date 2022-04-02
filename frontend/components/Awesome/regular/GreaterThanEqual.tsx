import * as React from "react";

const SvgGreaterThanEqual = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M368 416H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM33.15 310.37l11.88 31.1c3.28 8.59 12.59 12.77 20.8 9.33l276.12-115.56c6.08-2.54 10.06-8.7 10.06-15.54v-55.4c0-6.84-3.98-13-10.06-15.54L65.82 33.2c-8.21-3.43-17.52.74-20.8 9.33l-11.88 31.1c-3.28 8.58.71 18.32 8.92 21.76L272.91 192 42.06 288.61c-8.2 3.44-12.19 13.18-8.91 21.76z" />
  </svg>
);

SvgGreaterThanEqual.displayName = "SvgGreaterThanEqual";
SvgGreaterThanEqual.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGreaterThanEqual;
