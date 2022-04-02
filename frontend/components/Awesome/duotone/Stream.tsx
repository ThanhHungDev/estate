import * as React from "react";

const SvgStream = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 224v64a16 16 0 01-16 16H80a16 16 0 01-16-16v-64a16 16 0 0116-16h416a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M432 32H16A16 16 0 000 48v64a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zm0 352H16a16 16 0 00-16 16v64a16 16 0 0016 16h416a16 16 0 0016-16v-64a16 16 0 00-16-16z"
      className="stream_svg__fa-primary"
    />
  </svg>
);

SvgStream.displayName = "SvgStream";
SvgStream.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStream;
