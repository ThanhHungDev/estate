import * as React from "react";

const SvgCactus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 224a48 48 0 00-48 48v64a16 16 0 01-16 16h-48V101.43c0-52-38.93-98.58-90.84-101.29A96 96 0 00160 96v128h-48a16 16 0 01-16-16v-64a48 48 0 00-96 0v64a112 112 0 00112 112h48v160a32 32 0 0032 32h128a32 32 0 0032-32v-32h48a112 112 0 00112-112v-64a48 48 0 00-48-48zm-240-48a16 16 0 1116-16 16 16 0 01-16 16zm64 224a16 16 0 1116-16 16 16 0 01-16 16z" />
  </svg>
);

SvgCactus.displayName = "SvgCactus";
SvgCactus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCactus;
