import * as React from "react";

const SvgLock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 224h-16v-62.5C384 73.1 312.9.3 224.5 0 136-.3 64 71.6 64 160v64H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM96 160c0-70.6 57.4-128 128-128s128 57.4 128 128v64H96v-64zm304 320H48c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16z" />
  </svg>
);

SvgLock.displayName = "SvgLock";
SvgLock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLock;
