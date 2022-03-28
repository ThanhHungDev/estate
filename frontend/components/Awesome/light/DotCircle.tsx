import * as React from "react";

const SvgDotCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.663 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.663 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm0-296c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm0 128c-26.467 0-48-21.533-48-48s21.533-48 48-48 48 21.533 48 48-21.533 48-48 48z" />
  </svg>
);

SvgDotCircle.displayName = "SvgDotCircle";
SvgDotCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDotCircle;
