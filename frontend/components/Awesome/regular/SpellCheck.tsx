import * as React from "react";

const SvgSpellCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M572.48 279.8l-28.28-28.28a12 12 0 00-17 0l-175.18 175-79.28-80.66a12 12 0 00-17 0l-28.28 28.28a12 12 0 000 17l116 117.42a12 12 0 0017 0l212-211.71a12 12 0 00.02-17.05zM145.3 11a16 16 0 00-15.18-11H90.4a16 16 0 00-15.19 11L.83 235A16 16 0 0016 256h16.87a16 16 0 0015.19-11l12.3-37h103.28l12.3 37a16 16 0 0015.18 11H208a16 16 0 0015.18-21zm-69 149L112 58.84 145.59 160zM280 256h92a76 76 0 0046.16-136.33A76 76 0 00356 0h-76a24 24 0 00-24 24v208a24 24 0 0024 24zm24-208h52a28 28 0 010 56h-52zm0 104h68a28 28 0 010 56h-68z" />
  </svg>
);

SvgSpellCheck.displayName = "SvgSpellCheck";
SvgSpellCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpellCheck;
