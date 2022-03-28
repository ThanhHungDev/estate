import * as React from "react";

const SvgBadgeSheriff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M440 320c-1.16 0-2.14.56-3.28.66L398.22 256l38.49-64.61c1.14.09 2.12.66 3.29.66a40 40 0 10-36.57-56h-76.55L285.5 66.48A39.55 39.55 0 00296 40a40 40 0 00-80 0 39.55 39.55 0 0010.59 26.62L185.28 136h-76.71A40 40 0 1072 192c1.16 0 2.14-.56 3.28-.66l38.5 64.71-38.49 64.61c-1.14-.09-2.12-.66-3.29-.66a40 40 0 1036.57 56h76.55l41.38 69.52A39.55 39.55 0 00216 472a40 40 0 0080 0 39.55 39.55 0 00-10.59-26.62L326.72 376h76.71A40 40 0 10440 320zm-126.94 8a24 24 0 00-20.62 11.72l-36.53 61.36-36.5-61.35A24 24 0 00198.78 328h-72l35.53-59.66a24 24 0 000-24.54L126.78 184h72.16a24 24 0 0020.62-11.72l36.53-61.36 36.5 61.35A24 24 0 00313.22 184h72l-35.53 59.66a24 24 0 000 24.54l35.53 59.8zM256 208a48 48 0 1048 48 48 48 0 00-48-48z" />
  </svg>
);

SvgBadgeSheriff.displayName = "SvgBadgeSheriff";
SvgBadgeSheriff.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBadgeSheriff;