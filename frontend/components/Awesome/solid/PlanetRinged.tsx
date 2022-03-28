import * as React from "react";

const SvgPlanetRinged = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M502.917 9.068c-23.49-23.49-88.309.014-167.213 54.818C260.286 32.63 170.23 47.591 108.91 108.911c-61.318 61.32-76.282 151.375-45.025 226.793C9.082 414.608-14.423 479.427 9.068 502.917c37.193 37.193 177.896-43.21 314.268-179.582C459.71 186.964 540.11 46.26 502.917 9.068zM346.505 346.505c-38.155 38.153-84.07 78.865-130.693 113.573A207.995 207.995 0 00460.04 215.65c-36.188 48.6-77.96 95.282-113.534 130.855z" />
  </svg>
);

SvgPlanetRinged.displayName = "SvgPlanetRinged";
SvgPlanetRinged.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlanetRinged;
