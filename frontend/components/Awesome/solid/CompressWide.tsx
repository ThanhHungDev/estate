import * as React from "react";

const SvgCompressWide = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M500 224H376c-13.3 0-24-10.7-24-24V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-340-24V76c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 236V312c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm256 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H376c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" />
  </svg>
);

SvgCompressWide.displayName = "SvgCompressWide";
SvgCompressWide.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCompressWide;
