import * as React from "react";

const SvgUnderline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 0H296a8 8 0 00-8 8v16a8 8 0 008 8h56v224a128 128 0 01-256 0V32h56a8 8 0 008-8V8a8 8 0 00-8-8H8a8 8 0 00-8 8v16a8 8 0 008 8h56v224c0 88.22 71.78 160 160 160s160-71.78 160-160V32h56a8 8 0 008-8V8a8 8 0 00-8-8zm0 480H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgUnderline.displayName = "SvgUnderline";
SvgUnderline.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUnderline;
