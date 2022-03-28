import * as React from "react";

const SvgAlignCenter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M344 48H104a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8V56a8 8 0 00-8-8zm96 384H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zm-96-128H104a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8zm96-128H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgAlignCenter.displayName = "SvgAlignCenter";
SvgAlignCenter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignCenter;
