import * as React from "react";

const SvgCroissant = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M209.1 387.94L110 465.73a215.54 215.54 0 0070.67 44.19 32 32 0 0042.91-35.18zm300.82-207.28A215.54 215.54 0 00465.73 110l-77.79 99.1 86.8 14.47a32.36 32.36 0 005.26.43 32 32 0 0029.92-43.34zM234.9 22.59A32 32 0 00196.55 1 268.35 268.35 0 001 196.55a32 32 0 0021.6 38.35l208 64a32 32 0 0032-8l28.31-28.31a32 32 0 008-32zm212.84 43a32 32 0 00-12.33-21.39A217.11 217.11 0 00304.46 0a215.78 215.78 0 00-43.26 4.48c1.41 2.93 3.3 5.52 4.28 8.7l64 208c.06.2 0 .41.1.62 6-1.93 11.61-5 15.6-10l96-122.32a32 32 0 006.56-23.85zM221.8 329.57c-.2-.06-.42 0-.62-.09l-208-64a62.68 62.68 0 01-8.54-3.57 215.1 215.1 0 0039.59 173.5 32 32 0 0021.39 12.33 32.51 32.51 0 004.05.26 32 32 0 0019.76-6.83l122.32-96c5.1-3.99 8.12-9.58 10.05-15.6z" />
  </svg>
);

SvgCroissant.displayName = "SvgCroissant";
SvgCroissant.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCroissant;
