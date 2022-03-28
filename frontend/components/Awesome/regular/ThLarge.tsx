import * as React from "react";

const SvgThLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm232 0v152H48V86a6 6 0 016-6h178zM48 280h184v152H54a6 6 0 01-6-6V280zm232 152V280h184v146a6 6 0 01-6 6H280zm184-200H280V80h178a6 6 0 016 6v146z" />
  </svg>
);

SvgThLarge.displayName = "SvgThLarge";
SvgThLarge.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgThLarge;