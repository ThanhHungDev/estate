import * as React from "react";

const SvgCaretRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 192 512" {...props}>
    <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
  </svg>
);

SvgCaretRight.displayName = "SvgCaretRight";
SvgCaretRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretRight;
