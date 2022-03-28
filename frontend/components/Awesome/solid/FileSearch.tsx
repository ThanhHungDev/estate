import * as React from "react";

const SvgFileSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M288 320c0-65.45 39.59-121.68 96-146.44V160H248a24.07 24.07 0 01-24-24V0H24A23.94 23.94 0 000 24v464a23.94 23.94 0 0024 24h336a23.94 23.94 0 0024-24v-21.56c-56.41-24.75-96-80.99-96-146.44zm96-198.1a23.92 23.92 0 00-7-16.9L279.1 7a24 24 0 00-17-7H256v128h128zm251.31 340.16l-77.41-77.41A126.69 126.69 0 00576 320a128 128 0 10-128 128c23.7 0 45.61-6.88 64.65-18.11l77.41 77.42a16 16 0 0022.63 0l22.62-22.62a16 16 0 000-22.63zM448 384a64 64 0 1164-64 64 64 0 01-64 64z" />
  </svg>
);

SvgFileSearch.displayName = "SvgFileSearch";
SvgFileSearch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileSearch;
