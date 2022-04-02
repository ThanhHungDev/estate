import * as React from "react";

const SvgAlignJustify = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 424H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16zm0-128H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16zm0-128H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16zm0-128H16A16 16 0 000 56v16a16 16 0 0016 16h416a16 16 0 0016-16V56a16 16 0 00-16-16z" />
  </svg>
);

SvgAlignJustify.displayName = "SvgAlignJustify";
SvgAlignJustify.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignJustify;
