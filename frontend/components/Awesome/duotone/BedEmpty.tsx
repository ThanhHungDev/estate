import * as React from "react";

const SvgBedEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M208 128h-96a16 16 0 00-16 16v144h128V144a16 16 0 00-16-16zm320 0H272a16 16 0 00-16 16v144h384v-48a112 112 0 00-112-112z"
      opacity={0.4}
    />
    <path
      d="M640 288v144a16 16 0 01-16 16h-32a16 16 0 01-16-16v-48H64v48a16 16 0 01-16 16H16a16 16 0 01-16-16V80a16 16 0 0116-16h32a16 16 0 0116 16v208z"
      className="bed-empty_svg__fa-primary"
    />
  </svg>
);

SvgBedEmpty.displayName = "SvgBedEmpty";
SvgBedEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedEmpty;
