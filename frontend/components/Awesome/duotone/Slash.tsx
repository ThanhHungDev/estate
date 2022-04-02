import * as React from "react";

const SvgSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M636.63 480.55L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.81 22.45z"
      opacity={0.4}
    />
  </svg>
);

SvgSlash.displayName = "SvgSlash";
SvgSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSlash;
