import * as React from "react";

const SvgPlaneSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M32.48 147.87L64 256 32.48 364.12A16 16 0 0048 384h40a16 16 0 0012.8-6.41L144 320h102.85l-49 171.59A16 16 0 00213.2 512h65.5a16 16 0 0013.89-8.06l66.6-116.54L34.35 136.34a15.46 15.46 0 00-1.87 11.53zM512 192H397.7L292.6 8.06C290.06 3.61 283.84 0 278.71 0H213.2a16 16 0 00-15.38 20.39l36.94 129.29L455.14 320H512c35.34 0 96-28.66 96-64s-60.66-64-96-64z"
      opacity={0.4}
    />
    <path
      d="M6.18 53.91a16 16 0 01-2.81-22.45L23 6.19a16 16 0 0122.46-2.81L633.82 458.1a16 16 0 012.81 22.45L617 505.82a16 16 0 01-22.45 2.81z"
      className="plane-slash_svg__fa-primary"
    />
  </svg>
);

SvgPlaneSlash.displayName = "SvgPlaneSlash";
SvgPlaneSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlaneSlash;
