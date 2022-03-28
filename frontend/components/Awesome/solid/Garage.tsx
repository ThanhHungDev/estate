import * as React from "react";

const SvgGarage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M128 512h384V352H128.11zm144-96h96a16 16 0 010 32h-96a16 16 0 010-32zm-144-96h383.47l.53-96H128v96zm482.5-203L338.41 3.67A57.4 57.4 0 00320 0a57.4 57.4 0 00-18.5 3.67L29.5 117A48.11 48.11 0 000 161.28V496a16 16 0 0016 16h64a16 16 0 0016-16V224c0-17.59 14.59-32 32.59-32h382.82c18 0 32.59 14.41 32.59 32v272a16 16 0 0016 16h64a16 16 0 0016-16V161.28A48.11 48.11 0 00610.5 117z" />
  </svg>
);

SvgGarage.displayName = "SvgGarage";
SvgGarage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGarage;
