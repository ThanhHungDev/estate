import * as React from "react";

const SvgArrowCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm149.6 263.6L272.9 404.3a23.9 23.9 0 01-33.9 0L106.4 271.6a23.9 23.9 0 010-33.9l10.9-11a24 24 0 0134.3.4l72.4 75.5V120a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v182.6l72.4-75.5a24 24 0 0134.3-.4l10.9 11a23.9 23.9 0 010 33.9z"
      opacity={0.4}
    />
    <path
      d="M360.4 227.1a24 24 0 0134.3-.4l10.9 11a23.9 23.9 0 010 33.9L272.9 404.3a23.9 23.9 0 01-33.9 0L106.4 271.6a23.9 23.9 0 010-33.9l10.9-11a24 24 0 0134.3.4l72.4 75.5V120a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v182.6l72.4-75.5z"
      className="arrow-circle-down_svg__fa-primary"
    />
  </svg>
);

SvgArrowCircleDown.displayName = "SvgArrowCircleDown";
SvgArrowCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowCircleDown;
