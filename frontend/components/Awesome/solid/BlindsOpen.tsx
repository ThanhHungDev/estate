import * as React from "react";

const SvgBlindsOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M16 464L0 512h512l-16-48zm48-255.79V192H16L0 240h39.16A80.21 80.21 0 0164 208.21zM175.59 320a79.18 79.18 0 01-127.18 0H16L0 368h512l-16-48zM160 192v16.21A80.12 80.12 0 01184.84 240H512l-16-48zM512 48V16a16 16 0 00-16-16H16A16 16 0 000 16v32a16 16 0 0016 16L0 112h64V64h32v162.94a48 48 0 1032 0V64h32v48h352l-16-48a16 16 0 0016-16z" />
  </svg>
);

SvgBlindsOpen.displayName = "SvgBlindsOpen";
SvgBlindsOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlindsOpen;
