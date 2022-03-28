import * as React from "react";

const SvgOverline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 0H16A16 16 0 000 16v16a16 16 0 0016 16h416a16 16 0 0016-16V16a16 16 0 00-16-16zM224 96A176 176 0 0048 272v64a176 176 0 00352 0v-64A176 176 0 00224 96zm112 240a112 112 0 01-224 0v-64a112 112 0 01224 0z" />
  </svg>
);

SvgOverline.displayName = "SvgOverline";
SvgOverline.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOverline;
