import * as React from "react";

const SvgOverline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M439 0H7a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8V8a8 8 0 00-8-8zM223 96A160 160 0 0063 256v96a160 160 0 00320 0v-96A160 160 0 00223 96zm128 256a128 128 0 01-256 0v-96a128 128 0 01256 0z" />
  </svg>
);

SvgOverline.displayName = "SvgOverline";
SvgOverline.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOverline;
