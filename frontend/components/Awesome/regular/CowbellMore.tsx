import * as React from "react";

const SvgCowbellMore = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M464 160c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176-78.95-176-176-176zm0 304a128 128 0 11128-128 128 128 0 01-128 128zm80-152h-56v-56a16 16 0 00-16-16h-16a16 16 0 00-16 16v56h-56a16 16 0 00-16 16v16a16 16 0 0016 16h56v56a16 16 0 0016 16h16a16 16 0 0016-16v-56h56a16 16 0 0016-16v-16a16 16 0 00-16-16zM300.39 464H51.14l57.54-320h230.64l4.1 22.84a207.09 207.09 0 0144.42-24.2l-3.65-20.29A32 32 0 00352.64 96h-16V48a48.1 48.1 0 00-48.12-48H160.29a48.1 48.1 0 00-48.09 48v48H95.36a32 32 0 00-31.55 26.35l-63.3 352A32 32 0 0032.07 512h321.59a209.26 209.26 0 01-53.27-48zM160 48h128v48H160z" />
  </svg>
);

SvgCowbellMore.displayName = "SvgCowbellMore";
SvgCowbellMore.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCowbellMore;
