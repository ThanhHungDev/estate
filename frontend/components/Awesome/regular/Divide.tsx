import * as React from "react";

const SvgDivide = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 160c26.51 0 48-21.49 48-48s-21.49-48-48-48-48 21.49-48 48 21.49 48 48 48zm176 64H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM192 352c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" />
  </svg>
);

SvgDivide.displayName = "SvgDivide";
SvgDivide.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDivide;
