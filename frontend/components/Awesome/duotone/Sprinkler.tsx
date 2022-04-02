import * as React from "react";

const SvgSprinkler = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M152 104a24 24 0 1024 24 24 24 0 00-24-24zM88 48a24 24 0 1024 24 24 24 0 00-24-24zm0 96a24 24 0 1024 24 24 24 0 00-24-24zm-64-40a24 24 0 1024 24 24 24 0 00-24-24zM24 0a24 24 0 1024 24A24 24 0 0024 0zm0 208a24 24 0 1024 24 24 24 0 00-24-24zm336-104a24 24 0 1024 24 24 24 0 00-24-24zm64 56a24 24 0 1024 24 24 24 0 00-24-24zm0-96a24 24 0 1024 24 24 24 0 00-24-24zm64 40a24 24 0 1024 24 24 24 0 00-24-24zm0 104a24 24 0 1024 24 24 24 0 00-24-24zm0-160a24 24 0 10-24-24 24 24 0 0024 24z"
      opacity={0.4}
    />
    <path
      d="M412.41 284.44l-67.52 78.23L320 387.56V512H192V387.56l-24.89-24.89-67.52-78.23A17.77 17.77 0 01113.81 256H224V80a16 16 0 0116-16h32a16 16 0 0116 16v176h110.19a17.77 17.77 0 0114.22 28.44z"
      className="sprinkler_svg__fa-primary"
    />
  </svg>
);

SvgSprinkler.displayName = "SvgSprinkler";
SvgSprinkler.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSprinkler;
