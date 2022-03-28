import * as React from "react";

const SvgFilePlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M377 105L279.1 7a24 24 0 00-17-7H256v128h128v-6.1a23.92 23.92 0 00-7-16.9zm-153 31V0H24A23.94 23.94 0 000 24v464a23.94 23.94 0 0024 24h336a23.94 23.94 0 0024-24V160H248a24.07 24.07 0 01-24-24zm72 176v16a16 16 0 01-16 16h-64v64a16 16 0 01-16 16h-16a16 16 0 01-16-16v-64h-64a16 16 0 01-16-16v-16a16 16 0 0116-16h64v-64a16 16 0 0116-16h16a16 16 0 0116 16v64h64a16 16 0 0116 16z" />
  </svg>
);

SvgFilePlus.displayName = "SvgFilePlus";
SvgFilePlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilePlus;
