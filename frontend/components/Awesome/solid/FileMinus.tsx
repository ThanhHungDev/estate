import * as React from "react";

const SvgFileMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M377 105L279.1 7a24 24 0 00-17-7H256v128h128v-6.1a23.92 23.92 0 00-7-16.9zm-153 31V0H24A23.94 23.94 0 000 24v464a23.94 23.94 0 0024 24h336a23.94 23.94 0 0024-24V160H248a24.07 24.07 0 01-24-24zm72 176v16a16 16 0 01-16 16H104a16 16 0 01-16-16v-16a16 16 0 0116-16h176a16 16 0 0116 16z" />
  </svg>
);

SvgFileMinus.displayName = "SvgFileMinus";
SvgFileMinus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileMinus;
