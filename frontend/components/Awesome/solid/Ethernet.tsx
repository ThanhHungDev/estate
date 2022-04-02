import * as React from "react";

const SvgEthernet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 192h-48v-48c0-8.8-7.2-16-16-16h-48V80c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v48H80c-8.8 0-16 7.2-16 16v48H16c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h80V320h32v128h64V320h32v128h64V320h32v128h64V320h32v128h80c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
  </svg>
);

SvgEthernet.displayName = "SvgEthernet";
SvgEthernet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEthernet;
