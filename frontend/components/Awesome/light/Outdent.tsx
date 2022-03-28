import * as React from "react";

const SvgOutdent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M100.69 363.29a15.63 15.63 0 0011.17 4.7A16 16 0 00128 352V160a16 16 0 00-16.13-16 15.66 15.66 0 00-11.18 4.7l-96 96a16 16 0 000 22.62zM96 198.64v114.72L38.63 256zM440 48H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8V56a8 8 0 00-8-8zm0 384H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H200a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H200a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgOutdent.displayName = "SvgOutdent";
SvgOutdent.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOutdent;
