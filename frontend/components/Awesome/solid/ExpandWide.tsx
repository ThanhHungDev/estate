import * as React from "react";

const SvgExpandWide = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M0 212V88c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM352 76v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V88c0-13.3-10.7-24-24-24H364c-6.6 0-12 5.4-12 12zm148 212h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V300c0-6.6-5.4-12-12-12zM160 436v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z" />
  </svg>
);

SvgExpandWide.displayName = "SvgExpandWide";
SvgExpandWide.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExpandWide;
