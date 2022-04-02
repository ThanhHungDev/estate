import * as React from "react";

const SvgParagraph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M368 96v368a16 16 0 01-16 16h-32a16 16 0 01-16-16V96z"
      opacity={0.4}
    />
    <path
      d="M432 48v32a16 16 0 01-16 16H272v368a16 16 0 01-16 16h-32a16 16 0 01-16-16V352h-32a160 160 0 010-320h240a16 16 0 0116 16z"
      className="paragraph_svg__fa-primary"
    />
  </svg>
);

SvgParagraph.displayName = "SvgParagraph";
SvgParagraph.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgParagraph;
