import * as React from "react";

const SvgPoll = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48H48A48 48 0 000 80zm112 304a16 16 0 01-16-16V240a16 16 0 0116-16h32a16 16 0 0116 16v128a16 16 0 01-16 16zm224-96a16 16 0 0116 16v64a16 16 0 01-16 16h-32a16 16 0 01-16-16v-64a16 16 0 0116-16zm-96-160a16 16 0 0116 16v224a16 16 0 01-16 16h-32a16 16 0 01-16-16V144a16 16 0 0116-16z"
      opacity={0.4}
    />
    <path
      d="M160 368V240a16 16 0 00-16-16h-32a16 16 0 00-16 16v128a16 16 0 0016 16h32a16 16 0 0016-16zm128-64v64a16 16 0 0016 16h32a16 16 0 0016-16v-64a16 16 0 00-16-16h-32a16 16 0 00-16 16zm-96-160v224a16 16 0 0016 16h32a16 16 0 0016-16V144a16 16 0 00-16-16h-32a16 16 0 00-16 16z"
      className="poll_svg__fa-primary"
    />
  </svg>
);

SvgPoll.displayName = "SvgPoll";
SvgPoll.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPoll;
