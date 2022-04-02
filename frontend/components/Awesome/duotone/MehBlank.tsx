import * as React from "react";

const SvgMehBlank = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 232a32 32 0 1132-32 32 32 0 01-32 32zm160 0a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M168 176a32 32 0 1032 32 32 32 0 00-32-32zm160 0a32 32 0 1032 32 32 32 0 00-32-32z"
      className="meh-blank_svg__fa-primary"
    />
  </svg>
);

SvgMehBlank.displayName = "SvgMehBlank";
SvgMehBlank.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMehBlank;
