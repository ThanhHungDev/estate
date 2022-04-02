import * as React from "react";

const SvgCowbell = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M384.19 122.35A32 32 0 00352.64 96h-16V48a48.1 48.1 0 00-48.12-48H160.29a48.1 48.1 0 00-48.09 48v48H95.36a32 32 0 00-31.55 26.35l-63.3 352A32 32 0 0032.07 512h383.86a32 32 0 0031.56-37.65zM176.32 64h96.17v32h-96.17z" />
  </svg>
);

SvgCowbell.displayName = "SvgCowbell";
SvgCowbell.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCowbell;
