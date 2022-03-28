import * as React from "react";

const SvgBars = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M16 288h416a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M432 384H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H16A16 16 0 000 80v32a16 16 0 0016 16h416a16 16 0 0016-16V80a16 16 0 00-16-16z"
      className="bars_svg__fa-primary"
    />
  </svg>
);

SvgBars.displayName = "SvgBars";
SvgBars.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBars;
