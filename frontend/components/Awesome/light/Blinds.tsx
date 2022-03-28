import * as React from "react";

const SvgBlinds = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M500.48 352h-33l8 32H36.5l8-32h-33l-11 44.12A16 16 0 0016 416h480a16 16 0 0015.52-19.88zm0 96h-33l8 32H36.5l8-32h-33l-11 44.12A16 16 0 0016 512h480a16 16 0 0015.52-19.88zM496 0H16A16 16 0 000 16v64a16 16 0 0016 16h112v96H36.5l16-64h-33l-19 76.12A16 16 0 0016 224h112v34.94A47.82 47.82 0 0098.94 288H36.5l8-32h-33l-11 44.12A16 16 0 0016 320h82.94A47.89 47.89 0 10160 258.94V96h336a16 16 0 0016-16V16a16 16 0 00-16-16zM144 320a16 16 0 1116-16 16 16 0 01-16 16zM480 64H32V32h448zm12.48 64h-33l16 64H192v32h304a16 16 0 0015.52-19.88zm8 128h-33l8 32H222.39a80.31 80.31 0 010 32H496a16 16 0 0015.52-19.88z" />
  </svg>
);

SvgBlinds.displayName = "SvgBlinds";
SvgBlinds.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlinds;
