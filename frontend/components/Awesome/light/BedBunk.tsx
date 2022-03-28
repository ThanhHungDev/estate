import * as React from "react";

const SvgBedBunk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M464 0H240a16 16 0 00-16 16v144H32V8a8 8 0 00-8-8H8a8 8 0 00-8 8v496a8 8 0 008 8h16a8 8 0 008-8v-56h512v56a8 8 0 008 8h16a8 8 0 008-8V112A112 112 0 00464 0zm80 376v40H256V288h208a80.09 80.09 0 0180 80zm0-86.23A111.53 111.53 0 00464 256H240a16 16 0 00-16 16v144H32V192h512zM544 160H256V32h208a80.09 80.09 0 0180 80zm-416-32a64 64 0 10-64-64 64 64 0 0064 64zm0-96a32 32 0 11-32 32 32 32 0 0132-32zm0 352a64 64 0 10-64-64 64 64 0 0064 64zm0-96a32 32 0 11-32 32 32 32 0 0132-32z" />
  </svg>
);

SvgBedBunk.displayName = "SvgBedBunk";
SvgBedBunk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedBunk;
