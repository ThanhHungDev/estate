import * as React from "react";

const SvgBlindsRaised = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M16 160L0 224h96v-64zM512 48V16a16 16 0 00-16-16H16A16 16 0 000 16v32a16 16 0 0016 16L0 128h96V64h32v64h384l-16-64a16 16 0 0016-16zm-16 112H128v64h384zM96 224v194.94a48 48 0 1032 0V224z" />
  </svg>
);

SvgBlindsRaised.displayName = "SvgBlindsRaised";
SvgBlindsRaised.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlindsRaised;
