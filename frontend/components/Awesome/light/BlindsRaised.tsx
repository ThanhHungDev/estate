import * as React from "react";

const SvgBlindsRaised = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M500.48 224h-33l8 32H192v32h304a16 16 0 0015.52-19.88zm0-96h-33l8 32H192v32h304a16 16 0 0015.52-19.88zM496 0H16A16 16 0 000 16v64a16 16 0 0016 16h112v64H36.5l8-32h-33l-11 44.12A16 16 0 0016 192h112v64H36.5l8-32h-33l-11 44.12A16 16 0 0016 288h112v130.94a48 48 0 1032 0V96h336a16 16 0 0016-16V16a16 16 0 00-16-16zM144 480a16 16 0 1116-16 16 16 0 01-16 16zM480 64H32V32h448z" />
  </svg>
);

SvgBlindsRaised.displayName = "SvgBlindsRaised";
SvgBlindsRaised.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlindsRaised;
