import * as React from "react";

const SvgWindowMinimize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 480H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
  </svg>
);

SvgWindowMinimize.displayName = "SvgWindowMinimize";
SvgWindowMinimize.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowMinimize;
