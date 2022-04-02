import * as React from "react";

const SvgCassetteTape = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M144 288h224a64 64 0 000-128H144a64 64 0 000 128zm224-80a16 16 0 11-16 16 16 16 0 0116-16zm-162.27 0h100.54a57.52 57.52 0 000 32H205.73a57.52 57.52 0 000-32zM144 208a16 16 0 11-16 16 16 16 0 0116-16zM464 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V112a48 48 0 00-48-48zM141.67 400l16-32h196.66l16 32zM464 400h-40l-40-80H128l-40 80H48V112h416z" />
  </svg>
);

SvgCassetteTape.displayName = "SvgCassetteTape";
SvgCassetteTape.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCassetteTape;
