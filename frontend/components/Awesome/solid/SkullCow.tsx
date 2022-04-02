import * as React from "react";

const SvgSkullCow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M416 96H224a64 64 0 00-64 64v128a64 64 0 0064 64l26.82 134.27A32 32 0 00282.2 512h75.53a32 32 0 0031.38-25.72L416 352a64 64 0 0064-64V160a64 64 0 00-64-64zM256 288a32 32 0 1132-32 32 32 0 01-32 32zm128 0a32 32 0 1132-32 32 32 0 01-32 32zM60.11 113.55C43.35 89.42 56.5 39 63 21.62a16 16 0 00-26.19-17C13.05 27.87 0 60.31 0 95.91 0 166.53 57.42 224 128 224v-95.91H96c-17.36 0-29.09-4.75-35.89-14.54zm543.12-109A16 16 0 00577 21.64c6.06 16.15 19.6 67.73 2.88 91.89-6.8 9.79-18.54 14.56-35.9 14.56H512V224c70.57 0 128-57.47 128-128.09 0-35.6-13-68.04-36.77-91.34z" />
  </svg>
);

SvgSkullCow.displayName = "SvgSkullCow";
SvgSkullCow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkullCow;
