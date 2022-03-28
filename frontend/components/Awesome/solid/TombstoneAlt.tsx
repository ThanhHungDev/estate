import * as React from "react";

const SvgTombstoneAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-48-256C448 85.96 362.04 0 256 0S64 85.96 64 192v224h384V192z" />
  </svg>
);

SvgTombstoneAlt.displayName = "SvgTombstoneAlt";
SvgTombstoneAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTombstoneAlt;
