import * as React from "react";

const SvgSoap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M400 96a48 48 0 10-48-48 48.05 48.05 0 0048 48zm0-64a16 16 0 11-16 16 16 16 0 0116-16zm-176 96a64 64 0 10-64-64 64 64 0 0064 64zm0-96a32 32 0 11-32 32 32 32 0 0132-32zm128 240H160a80 80 0 000 160h192a80 80 0 000-160zm0 128H160a48 48 0 010-96h192a48 48 0 010 96zm64-208h-32a64 64 0 00-128 0H96a96 96 0 00-96 96v128a96 96 0 0096 96h320a96 96 0 0096-96V288a96 96 0 00-96-96zm-96-32a32 32 0 11-32 32 32 32 0 0132-32zm160 256a64.07 64.07 0 01-64 64H96a64.07 64.07 0 01-64-64V288a64.07 64.07 0 0164-64h168.88a63.47 63.47 0 00110.24 0H416a64.07 64.07 0 0164 64z" />
  </svg>
);

SvgSoap.displayName = "SvgSoap";
SvgSoap.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSoap;
