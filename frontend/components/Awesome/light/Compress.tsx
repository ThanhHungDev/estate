import * as React from "react";

const SvgCompress = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v116H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h116v116c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12zm160 0V352h116c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12z" />
  </svg>
);

SvgCompress.displayName = "SvgCompress";
SvgCompress.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCompress;