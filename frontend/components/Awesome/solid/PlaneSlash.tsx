import * as React from "react";

const SvgPlaneSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M32.48 147.88L64 256 32.48 364.13A16 16 0 0048 384h40a16 16 0 0012.8-6.41L144 320h102.85l-49 171.59A16 16 0 00213.2 512h65.5a16 16 0 0013.89-8.06l66.6-116.54L34.35 136.34a15.47 15.47 0 00-1.87 11.54zm601.34 310.21L455.14 320H512c35.34 0 96-28.66 96-64s-60.66-64-96-64H397.7L292.61 8.06C290.06 3.61 283.84 0 278.71 0H213.2a16 16 0 00-15.38 20.39l36.94 129.29L45.46 3.38A16 16 0 0023 6.19L3.37 31.45a16 16 0 002.81 22.46l588.36 454.72a16 16 0 0022.46-2.82l19.64-25.26a16 16 0 00-2.82-22.46z" />
  </svg>
);

SvgPlaneSlash.displayName = "SvgPlaneSlash";
SvgPlaneSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlaneSlash;
