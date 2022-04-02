import * as React from "react";

const SvgMouseAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M224 0h-64A160 160 0 000 160v192a160 160 0 00160 160h64a160 160 0 00160-160V160A160 160 0 00224 0zm128 352a128.14 128.14 0 01-128 128h-64A128.14 128.14 0 0132 352V160A128.14 128.14 0 01160 32h64a128.14 128.14 0 01128 128zM192 80a48.05 48.05 0 00-48 48v32a48 48 0 0096 0v-32a48.05 48.05 0 00-48-48zm16 80a16 16 0 01-32 0v-32a16 16 0 0132 0z" />
  </svg>
);

SvgMouseAlt.displayName = "SvgMouseAlt";
SvgMouseAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMouseAlt;
