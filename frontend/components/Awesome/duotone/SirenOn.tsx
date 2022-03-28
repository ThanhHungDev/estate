import * as React from "react";

const SvgSirenOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M224.21 134.94a8 8 0 019-6.87l15.86 2.13a8 8 0 016.87 9L231.82 320H496l-25-199.94A64 64 0 00407.5 64h-175a64 64 0 00-63.5 56.06L144 320h55.54z"
      opacity={0.4}
    />
    <path
      d="M528 352H112a16 16 0 00-16 16v64a16 16 0 0016 16h416a16 16 0 0016-16v-64a16 16 0 00-16-16zM112 192a24 24 0 00-24-24H24a24 24 0 000 48h64a24 24 0 0024-24zm504-24h-64a24 24 0 000 48h64a24 24 0 000-48zM90.69 76a24 24 0 1026.62-39.92l-48-32A24 24 0 1042.69 44zM536 80a23.87 23.87 0 0013.29-4l48-32a24 24 0 10-26.6-39.94l-48 32A24 24 0 00536 80z"
      className="siren-on_svg__fa-primary"
    />
  </svg>
);

SvgSirenOn.displayName = "SvgSirenOn";
SvgSirenOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSirenOn;
