import * as React from "react";

const SvgDog = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M528 96h-64l-7.16-14.31C452 71.92 439.13 64 428.22 64h-69.63l-27.28-27.28A15.57 15.57 0 00320.13 32 16 16 0 00304 48v176H192a95.53 95.53 0 00-52.94 16H112a48.05 48.05 0 01-48-48 16 16 0 00-32 0 79.94 79.94 0 0077.47 79.73A95.08 95.08 0 0096 320v160a32 32 0 0032 32h64a32 32 0 0032-32v-96h96v96a32 32 0 0032 32h64a32 32 0 0032-32V240h32a64 64 0 0064-64v-64a16 16 0 00-16-16zM416 480h-64V352H192v128h-64V320a64.07 64.07 0 0164-64h118.06L416 282.48zm96-304a32 32 0 01-32 32h-64v41.52l-80-20V86.66l9.34 9.34h82.88l16 32H512zm-96-48a16 16 0 11-16-16 16 16 0 0116 16z" />
  </svg>
);

SvgDog.displayName = "SvgDog";
SvgDog.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDog;
