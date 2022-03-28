import * as React from "react";

const SvgFont = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 432h-33.32l-135-389.24A16 16 0 00248.55 32h-49.1a16 16 0 00-15.12 10.76L49.32 432H16a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16h-35.44l33.31-96h164.26l33.31 96H304a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16zM158.53 288L224 99.31 289.47 288z" />
  </svg>
);

SvgFont.displayName = "SvgFont";
SvgFont.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFont;
