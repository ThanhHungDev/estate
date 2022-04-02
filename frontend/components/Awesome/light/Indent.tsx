import * as React from "react";

const SvgIndent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M27.31 148.7a15.63 15.63 0 00-11.17-4.7A16 16 0 000 160v192a16 16 0 0016.13 16 15.58 15.58 0 0011.18-4.7l96-96a16 16 0 000-22.62zM32 313.36V198.64L89.37 256zM440 48H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8V56a8 8 0 00-8-8zm0 384H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H200a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H200a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgIndent.displayName = "SvgIndent";
SvgIndent.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIndent;
