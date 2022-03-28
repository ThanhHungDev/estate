import * as React from "react";

const SvgParagraph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M448 48v32a16 16 0 01-16 16h-48v368a16 16 0 01-16 16h-32a16 16 0 01-16-16V96h-32v368a16 16 0 01-16 16h-32a16 16 0 01-16-16V352h-32a160 160 0 010-320h240a16 16 0 0116 16z" />
  </svg>
);

SvgParagraph.displayName = "SvgParagraph";
SvgParagraph.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgParagraph;
