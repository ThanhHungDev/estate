import * as React from "react";

const SvgWaveSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M476 480H324a36 36 0 01-36-36V96h-96v156a36 36 0 01-36 36H16a16 16 0 01-16-16v-32a16 16 0 0116-16h112V68a36 36 0 0136-36h152a36 36 0 0136 36v348h96V260a36 36 0 0136-36h140a16 16 0 0116 16v32a16 16 0 01-16 16H512v156a36 36 0 01-36 36z" />
  </svg>
);

SvgWaveSquare.displayName = "SvgWaveSquare";
SvgWaveSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveSquare;
