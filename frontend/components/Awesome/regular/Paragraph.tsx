import * as React from "react";

const SvgParagraph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M415 32H191a160 160 0 000 320h48v112a16 16 0 0016 16h16a16 16 0 0016-16V80h48v384a16 16 0 0016 16h16a16 16 0 0016-16V80h32a16 16 0 0016-16V48a16 16 0 00-16-16zM239 304h-48a112 112 0 010-224h48z" />
  </svg>
);

SvgParagraph.displayName = "SvgParagraph";
SvgParagraph.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgParagraph;
