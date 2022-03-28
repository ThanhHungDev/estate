import * as React from "react";

const SvgPortrait = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 464H48V48h288v416zM192 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6h-5c-12.3 5.1-25.7 8-39.8 8s-27.6-2.9-39.8-8h-5c-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z" />
  </svg>
);

SvgPortrait.displayName = "SvgPortrait";
SvgPortrait.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPortrait;
