import * as React from "react";

const SvgScythe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 0H338.84C192 0 64 64 0 224h560.18l-13.06 64H392a8 8 0 00-8 8v16a8 8 0 008 8h148.6l-36.54 179.1a8 8 0 006.2 9.47l15.65 3.26a7.68 7.68 0 001.64.17 8 8 0 007.82-6.37L639.22 39A32 32 0 00608 0zm-35.62 192H50.4C122.62 61.06 244.73 32 338.84 32H608z" />
  </svg>
);

SvgScythe.displayName = "SvgScythe";
SvgScythe.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScythe;
