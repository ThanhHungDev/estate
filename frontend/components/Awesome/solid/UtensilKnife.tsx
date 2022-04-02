import * as React from "react";

const SvgUtensilKnife = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M424.9 8.7L20.8 412.8c-11.5 11.5-11.5 30.3 0 41.8l48.8 48.8c12.2 12.2 32.2 11.4 43.4-1.8l148.2-174.3C504.1 357 538.5 80.5 466.7 8.7c-11.6-11.6-30.3-11.6-41.8 0z" />
  </svg>
);

SvgUtensilKnife.displayName = "SvgUtensilKnife";
SvgUtensilKnife.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUtensilKnife;
