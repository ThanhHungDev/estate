import * as React from "react";

const SvgCoffin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M370.62 112.7l-98.79-99.23A45.65 45.65 0 00239.38 0h-94.76a45.63 45.63 0 00-32.47 13.5l-98.76 99.2a46.34 46.34 0 00-12 43.64l79.81 320.8A45.83 45.83 0 00125.71 512h132.58a45.83 45.83 0 0044.51-34.86l79.85-320.77a46.39 46.39 0 00-12-43.67zm-98.89 356.72A13.83 13.83 0 01258.29 480H125.71a13.82 13.82 0 01-13.44-10.58L32.42 148.59a14.16 14.16 0 013.66-13.33l98.73-99.17a13.84 13.84 0 019.81-4.09h94.76a13.78 13.78 0 019.78 4.06l98.76 99.2a14.22 14.22 0 013.66 13.36l-79.85 320.8z" />
  </svg>
);

SvgCoffin.displayName = "SvgCoffin";
SvgCoffin.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoffin;
