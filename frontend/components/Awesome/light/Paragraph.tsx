import * as React from "react";

const SvgParagraph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 32H224A160 160 0 0064.35 202.65c5.5 85 79.91 149.35 165.13 149.35H256v120a8 8 0 008 8h16a8 8 0 008-8V64h64v408a8 8 0 008 8h16a8 8 0 008-8V64h56a8 8 0 008-8V40a8 8 0 00-8-8zM256 320h-32a128 128 0 010-256h32z" />
  </svg>
);

SvgParagraph.displayName = "SvgParagraph";
SvgParagraph.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgParagraph;
