import * as React from "react";

const SvgAlignRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M16 216h416a16 16 0 0016-16v-16a16 16 0 00-16-16H16a16 16 0 00-16 16v16a16 16 0 0016 16zm416 208H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16zm3.17-384H172.83A12.82 12.82 0 00160 52.83v22.34A12.82 12.82 0 00172.83 88h262.34A12.82 12.82 0 00448 75.17V52.83A12.82 12.82 0 00435.17 40zm0 256H172.83A12.82 12.82 0 00160 308.83v22.34A12.82 12.82 0 00172.83 344h262.34A12.82 12.82 0 00448 331.17v-22.34A12.82 12.82 0 00435.17 296z" />
  </svg>
);

SvgAlignRight.displayName = "SvgAlignRight";
SvgAlignRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignRight;
