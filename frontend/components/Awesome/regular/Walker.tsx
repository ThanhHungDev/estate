import * as React from "react";

const SvgWalker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M408 388.75V88a88 88 0 00-88-88H186a88 88 0 00-85.37 66.66L.48 488.23a16 16 0 0011.64 19.4l15.52 3.89a16 16 0 0019.41-11.64L101.16 272H360v116.75a64 64 0 1048 0zM112.56 224l34.6-145.7A40 40 0 01186 48h134a40 40 0 0140 40v136zM384 464a16 16 0 1116-16 16 16 0 01-16 16z" />
  </svg>
);

SvgWalker.displayName = "SvgWalker";
SvgWalker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWalker;
