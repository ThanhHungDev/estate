import * as React from "react";

const SvgDivide = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8zM192 336c-26.46 0-48 21.54-48 48s21.54 48 48 48 48-21.54 48-48-21.54-48-48-48zm0-160c26.46 0 48-21.54 48-48s-21.54-48-48-48-48 21.54-48 48 21.54 48 48 48z" />
  </svg>
);

SvgDivide.displayName = "SvgDivide";
SvgDivide.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDivide;
