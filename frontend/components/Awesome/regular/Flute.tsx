import * as React from "react";

const SvgFlute = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 160H48a48 48 0 00-48 48v96a48 48 0 0048 48h544a48 48 0 0048-48v-96a48 48 0 00-48-48zM96 304H48v-96h48zm496 0H144v-96h448zm-80-24a24 24 0 10-24-24 24 24 0 0024 24zm-96 0a24 24 0 10-24-24 24 24 0 0024 24zm-96 0a24 24 0 10-24-24 24 24 0 0024 24z" />
  </svg>
);

SvgFlute.displayName = "SvgFlute";
SvgFlute.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlute;
