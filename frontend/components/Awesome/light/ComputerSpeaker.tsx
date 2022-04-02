import * as React from "react";

const SvgComputerSpeaker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M480 192a48 48 0 10-48-48 48 48 0 0048 48zm0-64a16 16 0 11-16 16 16 16 0 0116-16zm0 96a96 96 0 1096 96 96.1 96.1 0 00-96-96zm0 160a64 64 0 1164-64 64.08 64.08 0 01-64 64zm0-88a24 24 0 1024 24 24 24 0 00-24-24zM592 32H368a48 48 0 00-48 48v352a48 48 0 0048 48h224a48 48 0 0048-48V80a48 48 0 00-48-48zm16 400a16 16 0 01-16 16H368a16 16 0 01-16-16V80a16 16 0 0116-16h224a16 16 0 0116 16zm-504 16a8 8 0 00-8 8v16a8 8 0 008 8h200.41a79.15 79.15 0 01-14.79-32zM0 64v288a32 32 0 0032 32h256v-32H32V64h257.62a79.15 79.15 0 0114.79-32H32A32 32 0 000 64z" />
  </svg>
);

SvgComputerSpeaker.displayName = "SvgComputerSpeaker";
SvgComputerSpeaker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgComputerSpeaker;
