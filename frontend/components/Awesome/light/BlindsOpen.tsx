import * as React from "react";

const SvgBlindsOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 480H16a16 16 0 000 32h480a16 16 0 000-32zM16 352h64.36a79.29 79.29 0 01-14.75-32H16a16 16 0 000 32zm480-32H222.39a79.29 79.29 0 01-14.75 32H496a16 16 0 000-32zm0-320H16A16 16 0 000 16v64a16 16 0 0016 16h112v64H16a16 16 0 000 32h112v66.94a48 48 0 1032 0V96h336a16 16 0 0016-16V16a16 16 0 00-16-16zM144 320a16 16 0 1116-16 16 16 0 01-16 16zM480 64H32V32h448zm16 96H192v32h304a16 16 0 000-32z" />
  </svg>
);

SvgBlindsOpen.displayName = "SvgBlindsOpen";
SvgBlindsOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlindsOpen;
