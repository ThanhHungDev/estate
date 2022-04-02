import * as React from "react";

const SvgAlignLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M12.83 344h262.34A12.82 12.82 0 00288 331.17v-22.34A12.82 12.82 0 00275.17 296H12.83A12.82 12.82 0 000 308.83v22.34A12.82 12.82 0 0012.83 344zm0-256h262.34A12.82 12.82 0 00288 75.17V52.83A12.82 12.82 0 00275.17 40H12.83A12.82 12.82 0 000 52.83v22.34A12.82 12.82 0 0012.83 88zM432 168H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgAlignLeft.displayName = "SvgAlignLeft";
SvgAlignLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignLeft;
