import * as React from "react";

const SvgSortAlphaUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M447.17 202.94l-61.05-160A16 16 0 00371 32h-38a15.92 15.92 0 00-15.1 10.94l-61.06 160a16 16 0 0015.1 21.06h16.78a15.93 15.93 0 0015.11-10.94L314.35 184h75.3l10.52 29.06A15.93 15.93 0 00415.28 224h16.78a16 16 0 0015.11-21.06zM331.73 136L352 80l20.27 56zM416 288H288a16 16 0 00-16 16v16a16 16 0 0016 16h77.11L281 422.69a32 32 0 00-9 22.31v19a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16h-77.11L423 345.29a32 32 0 009-22.29v-19a16 16 0 00-16-16zM28 128h44v336a16 16 0 0016 16h16a16 16 0 0016-16V128h44a12 12 0 008.73-20.24l-68-72a12 12 0 00-17.44 0l-68 72A12 12 0 0028 128z" />
  </svg>
);

SvgSortAlphaUp.displayName = "SvgSortAlphaUp";
SvgSortAlphaUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortAlphaUp;
