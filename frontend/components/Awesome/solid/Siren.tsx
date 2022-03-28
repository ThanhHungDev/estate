import * as React from "react";

const SvgSiren = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M128.21 134.94a8 8 0 019-6.87l15.86 2.13a8 8 0 016.87 9L135.82 320H400l-25-199.94A64 64 0 00311.5 64h-175A64 64 0 0073 120.06L48 320h55.54zM432 352H16a16 16 0 00-16 16v64a16 16 0 0016 16h416a16 16 0 0016-16v-64a16 16 0 00-16-16z" />
  </svg>
);

SvgSiren.displayName = "SvgSiren";
SvgSiren.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSiren;
