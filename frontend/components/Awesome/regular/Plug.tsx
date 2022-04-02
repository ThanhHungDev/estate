import * as React from "react";

const SvgPlug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M312 24a24 24 0 00-48 0v88h48zm-192 0a24 24 0 00-48 0v88h48zm248 120H16a16 16 0 00-16 16v16a16 16 0 0016 16h16v64c0 80.14 59.11 145.92 136 157.58V512h48v-98.42c76.89-11.66 136-77.44 136-157.58v-64h16a16 16 0 0016-16v-16a16 16 0 00-16-16zm-64 112a112 112 0 01-224 0v-64h224z" />
  </svg>
);

SvgPlug.displayName = "SvgPlug";
SvgPlug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlug;
