import * as React from "react";

const SvgRadio = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M447 127H210.5l288.83-81.21a16 16 0 0011.07-19.74l-4.33-15.38A16 16 0 00486.33-.4L63 127a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V191a64 64 0 00-64-64zM207 247v16a8 8 0 01-8 8H87a8 8 0 01-8-8v-16a8 8 0 018-8h112a8 8 0 018 8zm0 144a8 8 0 01-8 8H87a8 8 0 01-8-8v-16a8 8 0 018-8h112a8 8 0 018 8zm16-64a8 8 0 01-8 8H71a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm144 72a80 80 0 1180-80 80 80 0 01-80 80z" />
  </svg>
);

SvgRadio.displayName = "SvgRadio";
SvgRadio.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadio;
