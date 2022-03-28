import * as React from "react";

const SvgGarage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M597.91 110.08L346.31 5.29a68.1 68.1 0 00-52.62 0L42.09 110.08A68.11 68.11 0 000 173.2V496a16 16 0 0016 16h16a16 16 0 0016-16V173.2a20.18 20.18 0 0112.5-18.8L312.19 49.58a20.49 20.49 0 0115.72 0L579.5 154.4a20.38 20.38 0 0112.5 18.8V496a16 16 0 0016 16h16a16 16 0 0016-16V173.2a68.11 68.11 0 00-42.09-63.12zM504 192H136a40 40 0 00-40 40v264a16 16 0 0016 16h16a16 16 0 0016-16V352h352v144a16 16 0 0016 16h16a16 16 0 0016-16V232a40 40 0 00-40-40zm-8 128H144v-80h352zm-128 96h-96a16 16 0 000 32h96a16 16 0 000-32z" />
  </svg>
);

SvgGarage.displayName = "SvgGarage";
SvgGarage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGarage;
