import * as React from "react";

const SvgCactus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M240 129.94a16 16 0 1016 16 16 16 0 00-16-16zm32 224a16 16 0 1016 16 16 16 0 00-16-16zM464 224a48 48 0 00-48 48v64a16 16 0 01-16 16h-48V101.43c0-52-38.93-98.58-90.84-101.3C259.43 0 257.71 0 256 0a96 96 0 00-96 96v128h-48a16 16 0 01-16-16v-64a48 48 0 00-96 0v64a112 112 0 00112 112h48v160a32 32 0 0032 32h128a32 32 0 0032-32v-32h48a112 112 0 00112-112v-64a48 48 0 00-48-48zM304 464h-96V96a48 48 0 0148-48l2.65.07c25 1.31 45.35 25.25 45.35 53.36z" />
  </svg>
);

SvgCactus.displayName = "SvgCactus";
SvgCactus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCactus;
