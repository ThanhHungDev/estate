import * as React from "react";

const SvgTombstone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-48-256C448 85.96 362.04 0 256 0S64 85.96 64 192v224h384V192zm-96-8c0 8.84-7.16 16-16 16h-56v128c0 8.84-7.16 16-16 16h-16c-8.84 0-16-7.16-16-16V200h-56c-8.84 0-16-7.16-16-16v-16c0-8.84 7.16-16 16-16h56v-48c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16v48h56c8.84 0 16 7.16 16 16v16z" />
  </svg>
);

SvgTombstone.displayName = "SvgTombstone";
SvgTombstone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTombstone;
